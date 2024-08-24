'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from 'flowbite-react';

import { usePathname } from 'next/navigation';

export function NavBar() {
  type TitleKeys = "/" | "/paas/notes" | "/paas/email";

  const titles: Record<TitleKeys, string> = {
    "/": "Dashboard",
    "/paas/notes": "Notes generator",
    "/paas/email": "Email templates"
  };

  const pathname: TitleKeys = usePathname() as TitleKeys;

  return (
    <>
    <Navbar fluid rounded className="pt-[18px] px-4 mx-[5px]">
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {titles[pathname]}
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <NavbarToggle className="ml-3"/>
      </div>
      <NavbarCollapse></NavbarCollapse>
    </Navbar>
    </>
  );
}
