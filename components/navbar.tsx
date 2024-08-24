'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from 'flowbite-react';

import { usePathname } from 'next/navigation';
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export function NavBar() {
  type TitleKeys = "/" | "/paas/notes" | "/paas/email";

  const titles: Record<TitleKeys, string> = {
    "/": "Home",
    "/paas/notes": "All-In Plan > Notes generator",
    "/paas/email": "All-In Plan > Email templates"
  };

  const pathname: TitleKeys = usePathname() as TitleKeys;

  return (
    <>
    <Navbar fluid rounded className="pt-[23px] px-4 mx-[5px] dark:bg-gray-900">
      <NavbarBrand href="#">
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
