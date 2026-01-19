export type Language = 'en' | 'ar';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      aiSupport: 'AI Support',
    },
    
    // Hero Section
    hero: {
      title: 'Ultimate Vehicle Protection',
      subtitle: 'Premium Automotive Care',
      description: 'Experience the finest in automotive protection with our expert thermal tinting, paint protection film, nano-ceramic coatings, and professional detailing services.',
      cta: 'Book Consultation',
      learnMore: 'Learn More',
    },

    // Services
    services: {
      title: 'Our Services',
      subtitle: 'Premium Protection Solutions',
      learnMore: 'Learn More',
      
      thermalTinting: {
        name: 'Thermal Tinting',
        shortDesc: 'Advanced window tinting for heat rejection and UV protection.',
        description: 'Our premium thermal window tinting provides exceptional heat rejection, UV protection, and enhanced privacy for your vehicle. Engineered specifically for Saudi Arabia\'s extreme climate, our films block up to 99% of harmful UV rays while reducing interior temperatures by up to 60%.',
        features: ['Up to 99% UV Rejection', 'Heat Reduction up to 60%', 'Enhanced Privacy', 'Glare Reduction', 'Interior Protection'],
      },
      
      ppf: {
        name: 'Paint Protection Film',
        shortDesc: 'Self-healing film that shields your paint from scratches and debris.',
        description: 'Protect your vehicle\'s finish with our premium self-healing paint protection film. This virtually invisible urethane film creates a durable barrier against rock chips, scratches, bug stains, and road debris, keeping your paint pristine for years to come.',
        features: ['Self-Healing Technology', 'Invisible Protection', '10-Year Warranty', 'UV & Yellowing Resistant', 'Stone Chip Protection'],
      },
      
      ceramic: {
        name: 'Nano-Ceramic Coating',
        shortDesc: 'Long-lasting ceramic protection with hydrophobic properties.',
        description: 'Our nano-ceramic coatings create a permanent bond with your vehicle\'s paint, providing unmatched protection and a brilliant, long-lasting shine. The hydrophobic properties make cleaning effortless while protecting against environmental contaminants.',
        features: ['9H+ Hardness Rating', 'Hydrophobic Surface', '5-10 Year Protection', 'Chemical Resistant', 'Enhanced Gloss'],
      },
      
      detailing: {
        name: 'Professional Detailing',
        shortDesc: 'Comprehensive interior and exterior detailing services.',
        description: 'Our professional detailing services restore and maintain your vehicle\'s appearance using premium products and techniques. From complete interior rejuvenation to exterior paint correction, we deliver showroom-quality results.',
        features: ['Paint Correction', 'Interior Deep Clean', 'Leather Conditioning', 'Engine Bay Cleaning', 'Odor Elimination'],
      },
    },

    // Why Choose Us
    whyUs: {
      title: 'Why Choose AutoShield',
      subtitle: 'Excellence in Every Detail',
      items: [
        {
          title: 'Expert Technicians',
          description: 'Factory-trained specialists with years of experience in premium vehicle protection.',
        },
        {
          title: 'Premium Materials',
          description: 'We use only the highest quality products from globally recognized brands.',
        },
        {
          title: 'Climate Expertise',
          description: 'Solutions specifically designed for Saudi Arabia\'s extreme heat and UV conditions.',
        },
        {
          title: 'Warranty Backed',
          description: 'All our services come with comprehensive warranties for your peace of mind.',
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'Ready to Protect Your Vehicle?',
      subtitle: 'Schedule your consultation today and discover the AutoShield difference.',
      button: 'Get Started',
    },

    // About Page
    about: {
      title: 'About AutoShield',
      subtitle: 'Premium Automotive Protection Since 2015',
      mission: 'Our Mission',
      missionText: 'To provide the highest quality automotive protection services that preserve and enhance the value of every vehicle we touch.',
      vision: 'Our Vision',
      visionText: 'To be the leading automotive protection brand in Saudi Arabia, recognized for excellence, innovation, and customer satisfaction.',
      stats: {
        years: 'Years Experience',
        cars: 'Cars Protected',
        satisfaction: 'Customer Satisfaction',
        warranty: 'Year Warranty',
      },
      values: {
        title: 'Our Values',
        quality: 'Quality First',
        qualityDesc: 'We never compromise on the quality of materials or workmanship.',
        integrity: 'Integrity',
        integrityDesc: 'Transparent pricing and honest recommendations for every customer.',
        innovation: 'Innovation',
        innovationDesc: 'Continuously adopting the latest technologies and techniques.',
        customer: 'Customer Focus',
        customerDesc: 'Your satisfaction is our ultimate measure of success.',
      },
    },

    // Contact Page
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'d love to hear from you',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        service: 'Service of Interest',
        selectService: 'Select a service',
        message: 'Message',
        messagePlaceholder: 'Tell us about your vehicle and requirements...',
        submit: 'Send Message',
        success: 'Thank you! We\'ll get back to you shortly.',
      },
      info: {
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        hours: 'Business Hours',
        addressText: 'King Fahd Road, Riyadh, Saudi Arabia',
        hoursText: 'Saturday - Thursday: 8:00 AM - 8:00 PM',
      },
    },

    // AI Support Page
    aiSupport: {
      title: 'AI Support',
      subtitle: 'Get instant answers to your questions',
      placeholder: 'Type your message...',
      send: 'Send',
      welcomeMessage: 'Welcome to AutoShield! I\'m your AI assistant specialized in vehicle protection services. I can help you choose the best solutions to protect your vehicle from heat, UV rays, and external damage. How can I assist you today?',
    },

    // Footer
    footer: {
      description: 'Premium automotive protection services in Saudi Arabia. Thermal tinting, PPF, ceramic coatings, and professional detailing.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact Info',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
    },

    // Common
    common: {
      readMore: 'Read More',
      viewAll: 'View All',
      bookNow: 'Book Now',
      getQuote: 'Get Quote',
    },
  },

  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن',
      contact: 'اتصل بنا',
      aiSupport: 'الدعم الذكي',
    },
    
    // Hero Section
    hero: {
      title: 'حماية فائقة لسيارتك',
      subtitle: 'عناية متميزة بالسيارات',
      description: 'استمتع بأفضل خدمات حماية السيارات من خلال تظليل حراري متقدم، أفلام حماية الطلاء، طلاء السيراميك النانوي، وخدمات التلميع الاحترافية.',
      cta: 'احجز استشارة',
      learnMore: 'اعرف المزيد',
    },

    // Services
    services: {
      title: 'خدماتنا',
      subtitle: 'حلول حماية متميزة',
      learnMore: 'اعرف المزيد',
      
      thermalTinting: {
        name: 'التظليل الحراري',
        shortDesc: 'تظليل نوافذ متقدم لرفض الحرارة والحماية من الأشعة فوق البنفسجية.',
        description: 'يوفر التظليل الحراري المتميز لدينا رفضًا استثنائيًا للحرارة وحماية من الأشعة فوق البنفسجية وخصوصية محسنة لسيارتك. مصمم خصيصًا لمناخ المملكة العربية السعودية القاسي، تحجب أفلامنا ما يصل إلى 99٪ من الأشعة فوق البنفسجية الضارة مع تقليل درجات الحرارة الداخلية بنسبة تصل إلى 60٪.',
        features: ['رفض الأشعة فوق البنفسجية حتى 99%', 'تقليل الحرارة حتى 60%', 'خصوصية محسنة', 'تقليل الوهج', 'حماية المقصورة'],
      },
      
      ppf: {
        name: 'فيلم حماية الطلاء',
        shortDesc: 'فيلم ذاتي الشفاء يحمي طلاءك من الخدوش والحطام.',
        description: 'احمِ طلاء سيارتك بفيلم حماية الطلاء المتميز ذاتي الشفاء. يخلق هذا الفيلم البولي يوريثان غير المرئي تقريبًا حاجزًا متينًا ضد رقائق الحجارة والخدوش وبقع الحشرات وحطام الطريق.',
        features: ['تقنية الشفاء الذاتي', 'حماية غير مرئية', 'ضمان 10 سنوات', 'مقاوم للأشعة فوق البنفسجية والاصفرار', 'حماية من رقائق الحجارة'],
      },
      
      ceramic: {
        name: 'طلاء السيراميك النانوي',
        shortDesc: 'حماية سيراميك طويلة الأمد مع خصائص طاردة للماء.',
        description: 'تخلق طلاءات السيراميك النانوي لدينا رابطة دائمة مع طلاء سيارتك، مما يوفر حماية لا مثيل لها ولمعانًا رائعًا يدوم طويلاً. الخصائص الطاردة للماء تجعل التنظيف سهلاً مع الحماية من الملوثات البيئية.',
        features: ['تصنيف صلابة 9H+', 'سطح طارد للماء', 'حماية 5-10 سنوات', 'مقاوم للمواد الكيميائية', 'لمعان محسن'],
      },
      
      detailing: {
        name: 'التلميع الاحترافي',
        shortDesc: 'خدمات تلميع شاملة للداخلية والخارجية.',
        description: 'تستعيد خدمات التلميع الاحترافية لدينا مظهر سيارتك وتحافظ عليه باستخدام منتجات وتقنيات متميزة. من تجديد المقصورة الكامل إلى تصحيح الطلاء الخارجي، نقدم نتائج بجودة صالات العرض.',
        features: ['تصحيح الطلاء', 'تنظيف عميق للداخلية', 'ترطيب الجلد', 'تنظيف حجرة المحرك', 'إزالة الروائح'],
      },
    },

    // Why Choose Us
    whyUs: {
      title: 'لماذا تختار أوتوشيلد',
      subtitle: 'التميز في كل تفصيل',
      items: [
        {
          title: 'فنيون خبراء',
          description: 'متخصصون مدربون من المصنع مع سنوات من الخبرة في حماية السيارات الفاخرة.',
        },
        {
          title: 'مواد متميزة',
          description: 'نستخدم فقط أعلى المنتجات جودة من العلامات التجارية المعترف بها عالميًا.',
        },
        {
          title: 'خبرة مناخية',
          description: 'حلول مصممة خصيصًا لظروف الحرارة الشديدة والأشعة فوق البنفسجية في المملكة العربية السعودية.',
        },
        {
          title: 'مدعوم بالضمان',
          description: 'جميع خدماتنا تأتي مع ضمانات شاملة لراحة بالك.',
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'مستعد لحماية سيارتك؟',
      subtitle: 'حدد موعد استشارتك اليوم واكتشف فرق أوتوشيلد.',
      button: 'ابدأ الآن',
    },

    // About Page
    about: {
      title: 'عن أوتوشيلد',
      subtitle: 'حماية السيارات المتميزة منذ 2015',
      mission: 'مهمتنا',
      missionText: 'تقديم أعلى جودة من خدمات حماية السيارات التي تحافظ على قيمة كل سيارة نتعامل معها وتعززها.',
      vision: 'رؤيتنا',
      visionText: 'أن نكون العلامة التجارية الرائدة لحماية السيارات في المملكة العربية السعودية، معروفين بالتميز والابتكار ورضا العملاء.',
      stats: {
        years: 'سنوات خبرة',
        cars: 'سيارة محمية',
        satisfaction: 'رضا العملاء',
        warranty: 'سنوات ضمان',
      },
      values: {
        title: 'قيمنا',
        quality: 'الجودة أولاً',
        qualityDesc: 'لا نتنازل أبدًا عن جودة المواد أو الصنعة.',
        integrity: 'النزاهة',
        integrityDesc: 'أسعار شفافة وتوصيات صادقة لكل عميل.',
        innovation: 'الابتكار',
        innovationDesc: 'نتبنى باستمرار أحدث التقنيات والتقنيات.',
        customer: 'التركيز على العميل',
        customerDesc: 'رضاك هو مقياسنا النهائي للنجاح.',
      },
    },

    // Contact Page
    contact: {
      title: 'اتصل بنا',
      subtitle: 'يسعدنا سماعك',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        service: 'الخدمة المطلوبة',
        selectService: 'اختر خدمة',
        message: 'الرسالة',
        messagePlaceholder: 'أخبرنا عن سيارتك ومتطلباتك...',
        submit: 'إرسال الرسالة',
        success: 'شكراً لك! سنتواصل معك قريباً.',
      },
      info: {
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        address: 'العنوان',
        hours: 'ساعات العمل',
        addressText: 'طريق الملك فهد، الرياض، المملكة العربية السعودية',
        hoursText: 'السبت - الخميس: 8:00 صباحًا - 8:00 مساءً',
      },
    },

    // AI Support Page
    aiSupport: {
      title: 'الدعم الذكي',
      subtitle: 'احصل على إجابات فورية لأسئلتك',
      placeholder: 'اكتب رسالتك...',
      send: 'إرسال',
      welcomeMessage: 'مرحباً بك في AutoShield! أنا مساعدك الذكي المتخصص في خدمات حماية السيارات. يمكنني مساعدتك في اختيار أفضل الحلول لحماية مركبتك من الحرارة والأشعة فوق البنفسجية والأضرار الخارجية. كيف يمكنني مساعدتك اليوم؟',
    },

    // Footer
    footer: {
      description: 'خدمات حماية السيارات المتميزة في المملكة العربية السعودية. التظليل الحراري، فيلم حماية الطلاء، طلاءات السيراميك، والتلميع الاحترافي.',
      quickLinks: 'روابط سريعة',
      services: 'الخدمات',
      contact: 'معلومات الاتصال',
      followUs: 'تابعنا',
      rights: 'جميع الحقوق محفوظة.',
    },

    // Common
    common: {
      readMore: 'اقرأ المزيد',
      viewAll: 'عرض الكل',
      bookNow: 'احجز الآن',
      getQuote: 'احصل على عرض سعر',
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
