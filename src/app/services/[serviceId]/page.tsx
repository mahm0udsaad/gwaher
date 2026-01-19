import ServiceDetail from '@/screens/ServiceDetail';

export default function ServiceDetailPage({ params }: { params: { serviceId: string } }) {
  return <ServiceDetail serviceId={params.serviceId} />;
}
