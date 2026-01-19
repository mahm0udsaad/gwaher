import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

const AISupport = () => {
  const { t, dir, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Streaming welcome message on mount
  useEffect(() => {
    const welcomeMessage = t.aiSupport.welcomeMessage;
    let index = 0;
    let content = '';

    const welcomeId = Date.now().toString();
    setMessages([
      {
        id: welcomeId,
        role: 'assistant',
        content: '',
        timestamp: new Date(),
        isStreaming: true,
      },
    ]);

    const interval = setInterval(() => {
      if (index < welcomeMessage.length) {
        content += welcomeMessage[index];
        setMessages([
          {
            id: welcomeId,
            role: 'assistant',
            content,
            timestamp: new Date(),
            isStreaming: index < welcomeMessage.length - 1,
          },
        ]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [language]); // Re-run when language changes

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingContent]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response with streaming effect
    const aiResponses = [
      language === 'ar' 
        ? 'شكراً لتواصلك معنا! نحن متخصصون في تقديم أفضل حلول حماية السيارات. هل تريد معرفة المزيد عن خدماتنا؟'
        : 'Thank you for reaching out! We specialize in providing the best automotive protection solutions. Would you like to know more about our services?',
      language === 'ar'
        ? 'يسعدني مساعدتك! خدماتنا تشمل التظليل الحراري، فيلم حماية الطلاء، طلاء السيراميك النانوي، والتلميع الاحترافي. أي خدمة تهمك؟'
        : 'I\'d be happy to help! Our services include thermal tinting, paint protection film, nano-ceramic coating, and professional detailing. Which service interests you?',
      language === 'ar'
        ? 'نقدم ضمانات شاملة على جميع خدماتنا. التظليل الحراري وفيلم PPF يأتيان مع ضمان 10 سنوات، بينما طلاء السيراميك يأتي مع ضمان 5-10 سنوات.'
        : 'We offer comprehensive warranties on all services. Thermal tinting and PPF come with 10-year warranty, while ceramic coating comes with 5-10 years warranty.',
    ];

    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
    const aiMessageId = (Date.now() + 1).toString();
    
    let index = 0;
    let content = '';

    const streamInterval = setInterval(() => {
      if (index < randomResponse.length) {
        content += randomResponse[index];
        setMessages(prev => {
          const existingAiMessage = prev.find(m => m.id === aiMessageId);
          if (existingAiMessage) {
            return prev.map(m => 
              m.id === aiMessageId 
                ? { ...m, content, isStreaming: index < randomResponse.length - 1 }
                : m
            );
          }
          return [...prev, {
            id: aiMessageId,
            role: 'assistant' as const,
            content,
            timestamp: new Date(),
            isStreaming: true,
          }];
        });
        index++;
      } else {
        clearInterval(streamInterval);
        setIsLoading(false);
      }
    }, 20);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(language === 'ar' ? 'ar-SA' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      
      {/* Chat Container */}
      <div className="flex-1 flex flex-col pt-20 overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex gap-4',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'assistant' && (
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">A</span>
                  </div>
                )}
                
                <div
                  className={cn(
                    'max-w-[80%] rounded-2xl px-4 py-3',
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border'
                  )}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">
                    {message.content}
                    {message.isStreaming && (
                      <span className="inline-block w-2 h-5 ms-1 bg-primary animate-cursor-blink align-middle" />
                    )}
                  </p>
                  <p
                    className={cn(
                      'text-xs mt-2',
                      message.role === 'user'
                        ? 'text-primary-foreground/70'
                        : 'text-muted-foreground'
                    )}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </div>

                {message.role === 'user' && (
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium">You</span>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-border bg-background/80 backdrop-blur-lg px-4 py-4">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="flex gap-3">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.aiSupport.placeholder}
                className="flex-1 rounded-xl h-12"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                className="w-12 h-12 rounded-xl shadow-gold"
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AISupport;
