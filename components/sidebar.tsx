'use client';

import { Sidebar } from 'flowbite-react';
import {HiHome} from 'react-icons/hi';
import { HiBriefcase } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi';

import type { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme['sidebar'] = {
  root: {
    "base": "h-full dark",
    inner:
      'h-full overflow-y-auto overflow-x-hidden bg-gray-50 px-3 py-4 dark:bg-gray-800',
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
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png"
        imgAlt="Flowbite logo"
        className="pt-2"
      >
        Escalations
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiHome}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiPlus}>
            New escalation
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiBriefcase} label="My cases">
            <Sidebar.Item href="#">Pending</Sidebar.Item>
            <Sidebar.Item href="#">Resolved</Sidebar.Item>
            <Sidebar.Item href="#">Closed</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
