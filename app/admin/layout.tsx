import HomeLayout from '@/components/admin/HomeLayout';
import { verifySession } from '@/src/auth/dal';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin'
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {

  const { user } = await verifySession()

  return (
    <>
      <HomeLayout user={user} >
        {children}
      </HomeLayout>
    </>
  );
};
