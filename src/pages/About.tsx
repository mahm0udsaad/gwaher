import { Link } from 'react-router-dom';
import { Users, Target, Eye, Award, Star, Car, ThumbsUp, Clock } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

import workshop from '@/assets/workshop.jpg';
import heroMain from '@/assets/hero-main.jpg';

const About = () => {
  const { t, dir } = useLanguage();

  const stats = [
    { icon: Clock, value: '9+', label: t.about.stats.years },
    { icon: Car, value: '15,000+', label: t.about.stats.cars },
    { icon: ThumbsUp, value: '99%', label: t.about.stats.satisfaction },
    { icon: Award, value: '10', label: t.about.stats.warranty },
  ];

  const values = [
    { icon: Star, title: t.about.values.quality, desc: t.about.values.qualityDesc },
    { icon: Users, title: t.about.values.integrity, desc: t.about.values.integrityDesc },
    { icon: Target, title: t.about.values.innovation, desc: t.about.values.innovationDesc },
    { icon: Eye, title: t.about.values.customer, desc: t.about.values.customerDesc },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src={heroMain}
            alt="AutoShield"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {t.about.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-card">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {/* Mission */}
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{t.about.mission}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.missionText}
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{t.about.vision}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Image */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={workshop}
          alt="AutoShield Workshop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </section>

      {/* Values */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.values.title}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-3xl bg-card border border-border card-hover text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:shadow-gold transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              <Button size="lg" asChild className="rounded-full px-10 shadow-gold">
                <Link to="/contact">{t.cta.button}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
