'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Award, Thermometer, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import { ImageCarousel } from '@/components/ImageCarousel';
import { ServiceCard } from '@/components/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';

import heroMain from '@/assets/hero-main.jpg';
import thermalTinting from '@/assets/thermal-tinting.jpg';
import ppfApplication from '@/assets/ppf-application.jpg';
import ceramicCoating from '@/assets/ceramic-coating.jpg';
import carDetailing from '@/assets/car-detailing.jpg';
import workshop from '@/assets/workshop.jpg';

const Index = () => {
  const { t, dir } = useLanguage();

  const heroImages = [
    { src: heroMain.src, alt: 'Premium automotive workshop' },
    { src: thermalTinting.src, alt: 'Thermal tinting service' },
    { src: ppfApplication.src, alt: 'PPF application' },
    { src: ceramicCoating.src, alt: 'Ceramic coating' },
    { src: carDetailing.src, alt: 'Car detailing' },
  ];

  const services = [
    {
      title: t.services.thermalTinting.name,
      description: t.services.thermalTinting.description,
      shortDesc: t.services.thermalTinting.shortDesc,
      image: thermalTinting.src,
      href: '/services/thermal-tinting',
      features: t.services.thermalTinting.features,
    },
    {
      title: t.services.ppf.name,
      description: t.services.ppf.description,
      shortDesc: t.services.ppf.shortDesc,
      image: ppfApplication.src,
      href: '/services/ppf',
      features: t.services.ppf.features,
    },
    {
      title: t.services.ceramic.name,
      description: t.services.ceramic.description,
      shortDesc: t.services.ceramic.shortDesc,
      image: ceramicCoating.src,
      href: '/services/ceramic',
      features: t.services.ceramic.features,
    },
    {
      title: t.services.detailing.name,
      description: t.services.detailing.description,
      shortDesc: t.services.detailing.shortDesc,
      image: carDetailing.src,
      href: '/services/detailing',
      features: t.services.detailing.features,
    },
  ];

  const whyUsIcons = [Shield, Award, Thermometer, Clock];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <ImageCarousel
            images={heroImages}
            showControls={false}
            showDots={false}
            className="h-full rounded-none"
            aspectRatio="wide"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-hero-pattern" />
        </div>

        {/* Content */}
        <div className="container-main relative z-10">
          <div className="max-w-2xl space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                {t.hero.subtitle}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="rounded-full px-8 shadow-gold group">
                <Link href="/contact">
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5 ms-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8">
                <Link href="/services">{t.hero.learnMore}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section - 2 Column Layout */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.services.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.services.subtitle}
            </p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <ServiceCard
                key={service.href}
                {...service}
                index={index}
                layout="horizontal"
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.whyUs.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.whyUs.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyUs.items.map((item, index) => {
              const Icon = whyUsIcons[index];
              return (
                <div
                  key={index}
                  className="group p-8 rounded-3xl bg-card border border-border card-hover text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:shadow-gold transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshop Showcase */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img
          src={workshop}
          alt="Wahag Workshop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-main pb-16">
            <div className="max-w-2xl space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">State-of-the-Art Facility</h3>
              <p className="text-muted-foreground">
                Our modern workshop is equipped with the latest technology and tools to deliver premium results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container-main">
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8 md:p-16 text-center">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
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

export default Index;
