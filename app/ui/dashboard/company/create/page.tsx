import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Breadcrumbs from '@/app/ui/dashboard/company/breadcrumbs';
import Link from 'next/link';
import { Button } from '@/app/ui/button';

export default async function Page() {

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Companys', href: '/ui/dashboard/company' },
                    {
                        label: 'Create Company',
                        href: '/ui/dashboard/company/create',
                        active: true,
                    },
                ]}
            />
            <form>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Name company
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">name</span>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="A"
                                    autoComplete="name"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                            Logo
                        </label>
                        <div className="mt-2 flex items-center gap-x-3">
                            <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                            <button
                                type="button"
                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                Change
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/ui/dashboard/company"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Create Company</Button>
                </div>
            </form>
        </main>
    );
}