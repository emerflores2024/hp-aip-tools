import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { ThemeModeScript } from 'flowbite-react';
import { Suspense } from "react";
import Loading from "./loading";
import { UserProvider } from '@/app/context_provider';

import { NavBar } from '@/components/navbar';
import { SideBar } from '@/components/sidebar';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HP All-In Plan Tools',
  description: 'This tool is intended for use to the All-In Plan Print and PCaaS advisors as an additional help to handle customer interactions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='bg-gray-800' lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={manrope.className}>
        <UserProvider>
          <SideBar />
          <main className="lg:ml-64 h-screen dark">
            <NavBar />
            <div className="px-5 py-8">
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </div>
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
