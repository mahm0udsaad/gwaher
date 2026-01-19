'use client';

import { ServiceCard } from '@/components/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';
import thermalTinting from '@/assets/thermal-tinting.jpg';
import ppfApplication from '@/assets/ppf-application.jpg';
import ceramicCoating from '@/assets/ceramic-coating.jpg';
import carDetailing from '@/assets/car-detailing.jpg';

interface ServicesDisplayProps {
  serviceIds: string[];
}

export function ServicesDisplay({ serviceIds }: ServicesDisplayProps) {
  const { t } = useLanguage();

  const allServices = {
    thermalTinting: {
      title: t.services.thermalTinting.name,
      description: t.services.thermalTinting.description,
      image: thermalTinting.src,
      href: '/services/thermal-tinting',
      features: t.services.thermalTinting.features,
    },
    ppf: {
      title: t.services.ppf.name,
      description: t.services.ppf.description,
      image: ppfApplication.src,
      href: '/services/ppf',
      features: t.services.ppf.features,
    },
    ceramic: {
      title: t.services.ceramic.name,
      description: t.services.ceramic.description,
      image: ceramicCoating.src,
      href: '/services/ceramic',
      features: t.services.ceramic.features,
    },
    detailing: {
      title: t.services.detailing.name,
      description: t.services.detailing.description,
      image: carDetailing.src,
      href: '/services/detailing',
      features: t.services.detailing.features,
    },
  };

  const servicesToDisplay = serviceIds
    .map((id) => allServices[id as keyof typeof allServices])
    .filter(Boolean);

  if (servicesToDisplay.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-6 my-4">
      {servicesToDisplay.map((service, index) => (
        <ServiceCard
          key={service.href}
          {...service}
          index={index}
          layout="vertical"
        />
      ))}
    </div>
  );
}
