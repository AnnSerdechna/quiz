import { ReactNode } from 'react';

import { Menu } from '@/components';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div 
      className={`
        flex
        h-screen 
        overflow-hidden
      `}
    >
      <aside className={'w-1/5 py-4 px-2 border-r'}>
        <nav aria-label="Course list">
          <Menu />
        </nav>
      </aside>
      <main className={'w-full p-4 '}>
        {children}
      </main>
    </div>
  );
}