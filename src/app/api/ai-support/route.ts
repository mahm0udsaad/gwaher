import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText, convertToModelMessages, UIMessage, stepCountIs } from 'ai';
import { tools } from '@/ai/tools';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GEMINI_API_KEY,
});

const SYSTEM_PROMPT = `
أنت مساعد ذكي متخصص في خدمات Wahag لحماية السيارات.
أجب دائما باللغة العربية وبأسلوب احترافي ودود ومباشر.

عندما يسأل المستخدم عن الخدمات أو يطلب توصيات:
- استخدم أداة "displayServices" لعرض بطاقات الخدمات المرئية
- قدم مقدمة قصيرة وجذابة قبل البطاقات
- لا تكرر تفاصيل الخدمات في النص بعد استخدام الأداة

عندما يسأل عن "لماذا نختار وهاج" أو "ما يميزكم" أو "مميزاتكم":
- استخدم أداة "displayWhyChooseUs" لعرض قسم المميزات بشكل مرئي جميل
- قدم رد مختصر يشجع على الاطلاع على المميزات المعروضة

الخدمات المتوفرة:
- thermalTinting: عزل حراري للنوافذ (thermal window tinting)
- ppf: فيلم الحماية الشفاف (paint protection film)
- ceramic: طلاء السيراميك (ceramic coating)
- detailing: تفصيل السيارات (car detailing)
`;

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google('gemini-2.5-flash'),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    stopWhen: stepCountIs(5),
    temperature: 0.4,
    tools,
  });

  return result.toUIMessageStreamResponse();
}
