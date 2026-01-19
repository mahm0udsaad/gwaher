'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  features?: readonly string[];
  index?: number;
  layout?: 'vertical' | 'horizontal';
  reverse?: boolean;
}

export function ServiceCard({
  title,
  description,
  image,
  href,
  features,
  index = 0,
  layout = 'vertical',
  reverse = false,
}: ServiceCardProps) {
  const { t, dir } = useLanguage();

  if (layout === 'horizontal') {
    return (
      <div
        className={cn(
          'grid md:grid-cols-2 gap-8 lg:gap-16 items-center',
          reverse && 'md:[direction:rtl]'
        )}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className={cn('relative overflow-hidden rounded-3xl', reverse && 'md:[direction:ltr]')}>
          <div className="aspect-[4/3] w-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover img-zoom"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
        </div>
        
        <div className={cn('space-y-6', reverse && 'md:[direction:ltr]', dir === 'rtl' && 'md:text-right')}>
          <h3 className="text-3xl lg:text-4xl font-bold">{title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
          {features && features.length > 0 && (
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
          <Button asChild variant="default" className="rounded-full px-8 group">
            <Link href={href}>
              {t.services.learnMore}
              <ArrowRight className="w-4 h-4 ms-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative overflow-hidden rounded-3xl bg-card border border-border card-hover"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover img-zoom"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group/btn">
          <Link href={href} className="flex items-center gap-2">
            {t.services.learnMore}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
