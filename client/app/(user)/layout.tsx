import { ReactNode } from 'react';

import { Menu } from '@/components';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={'grid grid-cols-[200px_minmax(900px,_1fr)_100px] h-screen overflow-hidden'}>
      <aside className={'py-4 px-2 border-r'}>
        <nav aria-label="Course list">
          <Menu />
        </nav>
      </aside>
      <main className={'h-full p-4'}>
        {children}
      </main>
    </div>
  );
}