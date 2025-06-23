import { verifySession } from '@/src/auth/dal';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '',
  description: ''
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {

  await verifySession()

  return (
    <>
      {children}
    </>
  );
};
