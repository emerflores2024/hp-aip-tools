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

  type TitleKeys = "/" | "/notes" | "/email";

  const titles: Record<TitleKeys, string> = {
    "/": "Dashboard",
    "/notes": "Notes generator",
    "/email": "Email templates"
  };

  const pathname: TitleKeys = usePathname() as TitleKeys;

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    setUser(storedUser);
}, []);

useEffect(() => {
    if (user) {
        setOpenModal(false);
    }
    else {
        setOpenModal(true);
    }
}, [user]);

const handleUserInput = (event: any) => {
    setUserInput(event.target.value);
};

const setUserSession = () => {
    localStorage.setItem('user', userInput)
    const storedUser = localStorage.getItem('user');
    setUser(storedUser);
    window.dispatchEvent(new Event('storage'));
    setOpenModal(false);
};

  const editUserSession = () => {
    localStorage.removeItem("user");
    setUser(null);
    setOpenModal(true);
};

  return (
    <>
    <Navbar fluid rounded className="pt-[18px] px-4 mx-[5px]">
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {titles[pathname]}
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <p className='text-white hidden lg:flex flex-row-reverse items-center gap-4'>
        <Popover
          aria-labelledby="default-popover"
          content={
            <div className="w-fit bg-gray-700 text-sm text-gray-500 dark:text-gray-200">
              <div className="px-3 py-2">
                <a onClick={editUserSession} href="#">{user ? `Change my name` : `Set my name`}</a>
              </div>
            </div>
          }
        >
          <a href="#">
            <BsThreeDots className='text-2xl' />
          </a>
        </Popover>
          {user ? `Welcome, ${user}` : ``}
        </p>
        <NavbarToggle className="ml-3"/>
      </div>
      <NavbarCollapse></NavbarCollapse>
    </Navbar>

    <Modal className="dark" show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
    <Modal.Header />
    <Modal.Body>
        <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Please type your name</h3>
            <div>
                <div className="mb-2 block">
                </div>
                <TextInput id="user_input" name="user_input" type="text" sizing="md" required onChange={handleUserInput} value={userInput}
                    helperText={
                        <>
                          Your name will be stored locally in order to sign all email templates correctly.
                        </>
                      }
                />
            </div>
            <div className="w-full">
                <Button onClick={setUserSession} color="blue">Save</Button>
            </div>
        </div>
    </Modal.Body>
    </Modal>
    </>
  );
}
