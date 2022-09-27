import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import Toggle from '@/components/theme/ThemeToggle';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-dark'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          Tinderland
        </UnstyledLink>
        <Toggle />
      </div>
    </header>
  );
}
