import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Providers from './providers';
import '../index.css';

export const metadata: Metadata = {
  title: 'Wahag',
  description: 'Premium automotive protection services in Saudi Arabia.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
