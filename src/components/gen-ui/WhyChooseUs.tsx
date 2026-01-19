'use client';

import { Shield, Users, Star, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const whyUsIcons = [Users, Shield, Star, Wrench];

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <div className="my-6 space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{t.whyUs.title}</h3>
        <p className="text-muted-foreground">{t.whyUs.subtitle}</p>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-4">
        {t.whyUs.items.map((item, index) => {
          const Icon = whyUsIcons[index];
          return (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-gold transition-all duration-300">
                <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
