import ServiceDetail from '@/screens/ServiceDetail';

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const { serviceId } = await params;
  return <ServiceDetail serviceId={serviceId} />;
}
