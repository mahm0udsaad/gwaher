import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ServiceCard } from '@/components/ServiceCard';
import { ImageCarousel } from '@/components/ImageCarousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import thermalTinting from '@/assets/thermal-tinting.jpg';
import ppfApplication from '@/assets/ppf-application.jpg';
import ceramicCoating from '@/assets/ceramic-coating.jpg';
import carDetailing from '@/assets/car-detailing.jpg';
import workshop from '@/assets/workshop.jpg';

const Services = () => {
  const { t, dir } = useLanguage();

  const services = [
    {
      title: t.services.thermalTinting.name,
      description: t.services.thermalTinting.description,
      image: thermalTinting,
      href: '/services/thermal-tinting',
      features: t.services.thermalTinting.features,
    },
    {
      title: t.services.ppf.name,
      description: t.services.ppf.description,
      image: ppfApplication,
      href: '/services/ppf',
      features: t.services.ppf.features,
    },
    {
      title: t.services.ceramic.name,
      description: t.services.ceramic.description,
      image: ceramicCoating,
      href: '/services/ceramic',
      features: t.services.ceramic.features,
    },
    {
      title: t.services.detailing.name,
      description: t.services.detailing.description,
      image: carDetailing,
      href: '/services/detailing',
      features: t.services.detailing.features,
    },
  ];

  const heroImages = [
    { src: thermalTinting, alt: 'Thermal Tinting' },
    { src: ppfApplication, alt: 'PPF Application' },
    { src: ceramicCoating, alt: 'Ceramic Coating' },
    { src: carDetailing, alt: 'Car Detailing' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src={workshop}
            alt="AutoShield Workshop"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {t.services.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="pb-16">
        <div className="container-main">
          <ImageCarousel
            images={heroImages}
            interval={5000}
            className="max-w-5xl mx-auto"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.href}
                {...service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-16 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t.cta.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.cta.subtitle}
              </p>
              <Button size="lg" asChild className="rounded-full px-10 shadow-gold group">
                <Link to="/contact">
                  {t.cta.button}
                  <ArrowRight className="w-5 h-5 ms-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
