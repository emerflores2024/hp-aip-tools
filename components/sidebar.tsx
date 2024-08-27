'use client';

import { Button, Sidebar } from 'flowbite-react';
import { FcPrint } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import type { CustomFlowbiteTheme } from 'flowbite-react';
import Link from 'next/link';
import { useState } from 'react';
import UserModal from '@/components/user_modal';
import { useUser } from '@/app/context_provider';

const customTheme: CustomFlowbiteTheme['sidebar'] = {
  root: {
    "base": "h-full dark",
    inner:
      'h-full overflow-y-auto overflow-x-hidden bg-gray-50 px-3 py-4 dark:bg-gray-800',
  },
};

export function SideBar({ isMobile, onClose }: { isMobile: boolean, onClose?: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { userName, setUserName } = useUser();

  return (
    <>
      <Sidebar
      className={`fixed left-0 z-40 h-screen ${isMobile ? 'top-10 block' : 'top-0 hidden lg:block'}`}
      aria-label="Sidebar with logo branding example"
      theme={customTheme}
    >
      <Sidebar.Logo
        href="#"
        img="https://hp-emailgenerator.web.app/static/hp-logo.png"
        imgAlt="Flowbite logo"
        className="pt-2"
      >
        My Tools
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" onClick={onClose} as={Link} icon={FcHome}>
            Home
          </Sidebar.Item>
          <Sidebar.Collapse icon={FcPrint} label="All-In Plan">
            <Sidebar.Item href="/paas/notes" onClick={onClose} as={Link}>Notes generator</Sidebar.Item>
            <Sidebar.Item href="/paas/email" onClick={onClose} as={Link}>Email templates</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse icon={FcReadingEbook} label="Laptop subscription">
            <Sidebar.Item href="/pcaas/notes" onClick={onClose} as={Link}>Notes generator</Sidebar.Item>
            <Sidebar.Item href="/pcaas/email" onClick={onClose} as={Link}>Email templates</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>

      <div className='fixed bottom-5 text-white w-56 ml-1'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          {userName ?
          <>
            <div className='shrink-0'>
              <img className="h-16" src="https://cdn-icons-png.freepik.com/512/7555/7555460.png" alt="" />
            </div>
            <div className="flex flex-col truncate">
              <p className="text-white text-center truncate">
                <strong>{userName}</strong>
              </p>
              <p className="text-gray-200 text-sm text-center">
                HP Advisor
              </p>
            </div>
          </>
          :
          <>
          <div className='shrink-0'>
              <img className="h-16" src="https://cdn-icons-png.flaticon.com/512/7007/7007092.png" alt="" />
            </div>
          <div>
            <p>Your name is not set</p>
          </div>
          </>
          }
            
          <div className='w-full'>
            <Button onClick={openModal} className='w-full' color="light">{userName ? "Change my name" : "Set my name"}</Button>
          </div>
        </div>
      </div>
    </Sidebar>

    <UserModal onClose={closeModal} isOpened={isModalOpen} />
    </>
    
  );
}
