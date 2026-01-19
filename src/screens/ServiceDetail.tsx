'use client';

import Link from 'next/link';
import { ArrowLeft, Check, Phone, Calendar } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ImageCarousel } from '@/components/ImageCarousel';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

import thermalTinting from '@/assets/thermal-tinting.jpg';
import ppfApplication from '@/assets/ppf-application.jpg';
import ceramicCoating from '@/assets/ceramic-coating.jpg';
import carDetailing from '@/assets/car-detailing.jpg';
import heroMain from '@/assets/hero-main.jpg';
import workshop from '@/assets/workshop.jpg';

type ServiceKey = 'thermal-tinting' | 'ppf' | 'ceramic' | 'detailing';

const serviceData: Record<ServiceKey, {
  images: string[];
  benefits: string[];
  process: string[];
  faq: { q: string; a: string }[];
  duration: string;
  warranty: string;
  price: string;
}> = {
  'thermal-tinting': {
    images: [thermalTinting.src, heroMain.src],
    benefits: [
      'Blocks up to 99% of harmful UV rays',
      'Reduces interior temperature by up to 60%',
      'Protects dashboard and upholstery from fading',
      'Enhanced privacy and security',
      'Reduces glare for safer driving',
      'Energy efficient - less AC usage',
    ],
    process: [
      'Vehicle inspection and surface preparation',
      'Computer-cut precision film templates',
      'Professional film application',
      'Quality inspection and finishing',
      'Care instructions and warranty registration',
    ],
    faq: [
      { q: 'How long does installation take?', a: '2-4 hours depending on vehicle type.' },
      { q: 'Is there a curing period?', a: 'Yes, avoid rolling windows down for 3-5 days.' },
      { q: 'Will it affect my visibility?', a: 'Our films maintain excellent optical clarity.' },
    ],
    duration: '2-4 hours',
    warranty: '10 Years',
    price: 'From SAR 1,500',
  },
  'ppf': {
    images: [ppfApplication.src, heroMain.src],
    benefits: [
      'Self-healing technology repairs minor scratches',
      'Invisible protection preserves original appearance',
      'Protects against rock chips and road debris',
      'UV resistant - prevents yellowing',
      'Chemical resistant - withstands bird droppings, sap',
      'Maintains vehicle resale value',
    ],
    process: [
      'Complete paint decontamination and correction',
      'Computer-designed pattern cutting',
      'Precision film installation by certified technicians',
      'Edge sealing and quality control',
      'Final inspection and warranty documentation',
    ],
    faq: [
      { q: 'Can PPF be removed?', a: 'Yes, it can be safely removed without damaging paint.' },
      { q: 'How does self-healing work?', a: 'Heat from the sun or hot water activates the healing process.' },
      { q: 'Can it be applied to any car?', a: 'Yes, we cover all makes and models.' },
    ],
    duration: '1-3 days',
    warranty: '10 Years',
    price: 'From SAR 5,000',
  },
  'ceramic': {
    images: [ceramicCoating.src, heroMain.src],
    benefits: [
      '9H+ hardness for superior scratch resistance',
      'Hydrophobic coating repels water and contaminants',
      'UV protection prevents oxidation and fading',
      'Chemical resistant against environmental damage',
      'Enhanced gloss and depth of color',
      'Easy maintenance - dirt slides off',
    ],
    process: [
      'Multi-stage paint decontamination',
      'Clay bar treatment and polish',
      'IPA wipe down for pure surface',
      'Multi-layer ceramic coating application',
      'Infrared curing for optimal bonding',
      '24-48 hour curing period',
    ],
    faq: [
      { q: 'How long does ceramic coating last?', a: '5-10 years with proper maintenance.' },
      { q: 'Can I wash my car normally?', a: 'Yes, but hand washing is recommended.' },
      { q: 'Does it replace waxing?', a: 'Yes, no waxing needed with ceramic coating.' },
    ],
    duration: '2-3 days',
    warranty: '5-10 Years',
    price: 'From SAR 3,500',
  },
  'detailing': {
    images: [carDetailing.src, workshop.src],
    benefits: [
      'Complete interior deep cleaning',
      'Paint correction removes swirl marks',
      'Leather conditioning and protection',
      'Engine bay cleaning and dressing',
      'Odor elimination treatment',
      'Showroom-quality finish',
    ],
    process: [
      'Exterior pre-wash and foam cannon',
      'Hand wash with pH-neutral shampoo',
      'Clay bar decontamination',
      'Paint correction (if needed)',
      'Interior vacuuming and steam cleaning',
      'Final inspection and quality control',
    ],
    faq: [
      { q: 'How often should I detail my car?', a: 'Every 3-6 months for optimal results.' },
      { q: 'Do you offer mobile services?', a: 'Contact us for mobile detailing availability.' },
      { q: 'Can you remove scratches?', a: 'Yes, paint correction can remove most scratches.' },
    ],
    duration: '4-8 hours',
    warranty: '30 Days',
    price: 'From SAR 800',
  },
};

const ServiceDetail = ({ serviceId }: { serviceId: string }) => {
  const { t, dir } = useLanguage();

  const serviceKey = serviceId as ServiceKey;
  const data = serviceData[serviceKey];

  if (!data) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Service not found</h1>
            <Button asChild>
              <Link href="/services">Back to Services</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const serviceTranslations: Record<ServiceKey, typeof t.services.thermalTinting> = {
    'thermal-tinting': t.services.thermalTinting,
    'ppf': t.services.ppf,
    'ceramic': t.services.ceramic,
    'detailing': t.services.detailing,
  };

  const service = serviceTranslations[serviceKey];

  const images = data.images.map((src, i) => ({
    src,
    alt: `${service.name} ${i + 1}`,
  }));

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-8">
        <div className="container-main">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Carousel */}
            <ImageCarousel images={images} />

            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {service.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-card border border-border rounded-2xl p-4 text-center">
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">{data.duration}</p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-4 text-center">
                  <p className="text-sm text-muted-foreground">Warranty</p>
                  <p className="font-semibold">{data.warranty}</p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-4 text-center">
                  <p className="text-sm text-muted-foreground">Starting</p>
                  <p className="font-semibold text-primary">{data.price}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="rounded-full px-8 shadow-gold">
                  <Link href="/contact">
                    <Calendar className="w-5 h-5 me-2" />
                    Book Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full px-8">
                  <a href="tel:+966112345678">
                    <Phone className="w-5 h-5 me-2" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-2xl"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Process</h2>
          <div className="space-y-4">
            {data.process.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <p className="text-lg pt-1.5">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">
            {data.faq.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-2xl"
              >
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container-main">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-16 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t.cta.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.cta.subtitle}
              </p>
              <Button size="lg" asChild className="rounded-full px-10 shadow-gold">
                <Link href="/contact">{t.cta.button}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
