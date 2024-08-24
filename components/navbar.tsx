'use client'

import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { Popover } from "flowbite-react";
import { Modal, Button, TextInput } from "flowbite-react";

export function NavBar(props: any) {
  const [user, setUser] = useState<string | null>(null);
  const [userInput, setUserInput] = useState('');
  const [openModal, setOpenModal] = useState(false);

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
