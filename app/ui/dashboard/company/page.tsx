import { fetchCompanys } from '@/app/lib/data';
import CompanysTable from '@/app/ui/dashboard/company/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Companys',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  const companys = await fetchCompanys();

  return (
    <main>
      <CompanysTable companys={companys} />
    </main>
  );
}