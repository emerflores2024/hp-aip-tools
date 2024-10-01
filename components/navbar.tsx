'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse
} from 'flowbite-react';

import { usePathname } from 'next/navigation';
import { FaBars } from "react-icons/fa6";
import MobileDrawer from '@/components/drawer';
import { useState } from 'react';


export function NavBar() {
  type TitleKeys = "/" | "/notifications" | "/paas/notes" | "/paas/email" | "/paas/resources" |  "/pcaas/notes" | "/pcaas/email";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const closeDrawer = () => setIsDrawerOpen(false);
  const openDrawer = () => setIsDrawerOpen(true);

  const titles: Record<TitleKeys, string> = {
    "/": "Home",
    "/notifications": "Notifications",
    "/paas/notes": "All-In Plan > Notes generator",
    "/paas/email": "All-In Plan > Email templates",
    "/paas/resources": "All-In Plan > Resources",
    "/pcaas/notes": "Laptop subscription > Notes generator",
    "/pcaas/email": "Laptop subscription > Email templates"
  };

  const pathname: TitleKeys = usePathname() as TitleKeys;

  return (
    <>
    <Navbar fluid rounded className="pt-[23px] px-4 mx-[5px] dark:bg-gray-900">
      <NavbarBrand href="#">
        <div className="mr-5 lg:hidden">
          <FaBars onClick={openDrawer} className="text-white text-2xl"/>
        </div>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        {titles[pathname]}
        </span>
      </NavbarBrand>
      
      <NavbarCollapse></NavbarCollapse>
    </Navbar>

    <MobileDrawer onClose={closeDrawer} isOpened={isDrawerOpen}/>
    </>
  );
}
