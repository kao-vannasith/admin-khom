 import { fetchStoragesPages } from '@/app/lib/data';
import Pagination from '@/app/ui/dashboard/invoices/pagination';
import CompanysTable from '@/app/ui/dashboard/storage/table';
import { Metadata } from 'next';
import Search from '@/app/ui/search';

export const metadata: Metadata = {
  title: 'Storage',
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
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchStoragesPages(query);

//   const storages = await fetchStoragesPages(query);

  return (
    <main>
         <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Storage" />
      </div>
      <CompanysTable query={query} currentPage={currentPage} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}