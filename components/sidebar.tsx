'use client';

import { Sidebar } from 'flowbite-react';
import {HiHome} from 'react-icons/hi';
import { HiBriefcase } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi';
import { RiStickyNoteAddLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { BsPrinter } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa";
import { NavBar } from '@/components/navbar';
import { FcPrint } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcHome } from "react-icons/fc";




import type { CustomFlowbiteTheme } from 'flowbite-react';
import Link from 'next/link';

const customTheme: CustomFlowbiteTheme['sidebar'] = {
  root: {
    "base": "h-full dark",
    inner:
      'h-full overflow-y-auto overflow-x-hidden bg-gray-50 px-3 py-4 dark:bg-gray-900',
  },
};

export function SideBar() {
  return (
    <Sidebar
      className="fixed top-0 left-0 z-40 h-screen hidden lg:block"
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
          <Sidebar.Item href="/" as={Link} icon={FcHome}>
            Home
          </Sidebar.Item>
          <Sidebar.Collapse icon={FcPrint} label="All-In Plan Print">
            <Sidebar.Item href="/paas/notes" as={Link}>Notes generator</Sidebar.Item>
            <Sidebar.Item href="/paas/email" as={Link}>Email templates</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse icon={FcReadingEbook} label="Laptop subscription">
            <Sidebar.Item href="#">Pending</Sidebar.Item>
            <Sidebar.Item href="#">Resolved</Sidebar.Item>
            <Sidebar.Item href="#">Closed</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
