'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

// Import images
import thermalImg from '@/assets/thermal-tinting.jpg';
import ppfImg from '@/assets/ppf-application.jpg';
import ceramicImg from '@/assets/ceramic-coating.jpg';
import detailingImg from '@/assets/car-detailing.jpg';

type ServiceId = 'thermalTinting' | 'ppf' | 'ceramic' | 'detailing';

interface ServiceRecommendationProps {
  serviceIds: ServiceId[];
  onBookNow?: (serviceId: string) => void;
}

const serviceImages: Record<ServiceId, any> = {
  thermalTinting: thermalImg,
  ppf: ppfImg,
  ceramic: ceramicImg,
  detailing: detailingImg,
};

export function ServiceRecommendation({ serviceIds, onBookNow }: ServiceRecommendationProps) {
  const { t } = useLanguage();

  const services = serviceIds.map((id) => {
    // Fallback data if translation is missing (safety check)
    const serviceData = t.services[id] || { name: id, shortDesc: '', features: [] };
    return {
      id,
      title: serviceData.name,
      description: serviceData.shortDesc,
      features: serviceData.features || [],
      image: serviceImages[id],
    };
  });

  return (
    <div className="w-full space-y-6 my-4">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {t.aiSupport.suggestedServices || 'Recommended For You'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={cn(
              "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-backwards",
            )}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <Card className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-card/50 backdrop-blur-sm">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-5 flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6 flex-1">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                      <div className="min-w-4 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-500" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full group/btn relative overflow-hidden" 
                  variant="default"
                  onClick={() => onBookNow?.(service.id)}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {t.common?.bookNow || 'Book Now'} 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
