import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='mx-0 h-screen w-screen overflow-x-hidden overflow-y-scroll dark:bg-dark dark:text-white'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
