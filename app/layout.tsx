import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Banner, Footer, ThemeModeScript } from 'flowbite-react';
import { Suspense } from "react";
import Loading from "./loading";
import { UserProvider } from '@/app/context_provider';

import { NavBar } from '@/components/navbar';
import { SideBar } from '@/components/sidebar';
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My HP Tools',
  description: 'This tool is intended for use to the All-In Plan Print and laptop Subscription advisors as an additional help to handle customer interactions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='bg-gray-900' lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={manrope.className}>
        <UserProvider>
          <SideBar isMobile={false}/>
          <main className="lg:ml-64 min-h-screen flex flex-col dark">
            {/*<Banner className='mt-5 mx-5'>
              <div className="flex w-full items-center justify-between rounded-lg border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-yellow-500">
                <div className="mx-auto flex items-center">
                  <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-50">
                    <MdAnnouncement className="mr-4 h-4 w-4 hidden xl:block shrink-0" />
                    <span className="text-justify">
                      I have updated email templates for All-In Plan print (PCaaS templates will be updated later), as some of you gave feedback that when email was sent to customers, the layout and some items were not displaying correctly. When you paste the email to CDAX, you will see some blank space added on top, this is something added automatically by CDAX editor as I am using a table layout, so unfortunately I do not have a way to remove it but you will need to delete it. Any other feedback is welcome!
                    </span>
                  </p>
                </div>
                <Banner.CollapseButton color="transparent" className="ml-4 border-0 bg-yellow-500 text-gray-500 dark:text-gray-50">
                  <HiX className="h-4 w-4" />
                </Banner.CollapseButton>
              </div>
  </Banner>*/}
            <NavBar />
            <div className="px-5 py-8">
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </div>
            <div className='dark mt-auto'>
              <Footer container className='rounded-none dark:bg-transparent w-full'>
                <div className='flex justify-between items-center text-gray-400 text-xs sm:text-sm w-full'>
                  <div>
                    <p>v3.0 Developed by Emerson Flores</p>
                  </div>
                  <div>
                    <p>Last update: 09/19/2024</p>
                  </div>
                </div>
              </Footer>
            </div>
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
