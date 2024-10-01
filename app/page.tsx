{/* 'use client'; */}

import { useState, useEffect } from 'react';
import { Banner, Card } from 'flowbite-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react';
import { FaPhone, FaClock, FaGlobe, FaCircleUser, FaSquareArrowUpRight, FaPrint, FaLaptop, FaDroplet, FaHeadphones  } from "react-icons/fa6";
import { HiArrowRight, HiX } from 'react-icons/hi';
import { MdAnnouncement, MdPercent } from 'react-icons/md';

export default async function Home() {
  return (
    <>
      <div className="gap-7 xl:gap-4 grid grid-cols-1 xl:grid-cols-3 text-gray-100">
        <div className='flex flex-col'>
          <div className='flex flex-row items-center gap-2'>
            <FaPrint />
            <p className='text-white font-semibold'>All-In Plan</p>
          </div>
        <Card className="bg-gray-700 mt-5 h-full">
            <div className='flex flex-row items-center gap-4'>
              <FaPhone />
              <p>+1 888-447-0148</p>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <FaGlobe />
              <p><a className='underline underline-offset-4' href="https://hp.com/us-en/all-in-plan/printers.html">hp.com/us-en/all-in-plan/printers.html</a></p>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <FaCircleUser />
              <p><a className='underline underline-offset-4' href="https://hpsmart.com">hpsmart.com</a></p>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <FaClock />
              <p>Available 24/7</p>
            </div>
          </Card>
        </div>
          

        <div className='flex flex-col'>
          <div className='flex flex-row items-center gap-2'>
            <FaLaptop className='text-xl'/>
            <p className='text-white font-semibold'>Laptop subscription</p>
          </div>
          <Card className="bg-gray-700 mt-5 h-full">
            <div className='flex flex-row items-center gap-4'>
              <FaPhone />
              <p>+1 866-204-8618</p>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <FaGlobe />
              <p><a className='underline underline-offset-4' href="https://hplaptopsubscription.hp.com">hplaptopsubscription.hp.com</a></p>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <FaCircleUser />
              <p><a className='underline underline-offset-4' href="https://hplaptopsubscription.hp.com/self-service/hp-my-account">hplaptopsubscription.hp.com/self-service/hp-my-account</a></p>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <FaClock />
              <p>Available 24/7</p>
            </div>
          </Card>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-row items-center gap-2'>
            <FaDroplet/>
            <p className='text-white font-semibold'>Instant Ink</p>
          </div>
          <Card className="bg-gray-700 mt-5 h-full">
            <div className='flex flex-row items-center gap-4'>
              <FaPhone />
              <p>+1 855-785-2777</p>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <FaGlobe />
              <p><a className='underline underline-offset-4' href="https://instantink.com">instantink.com</a></p>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <FaCircleUser />
              <p><a className='underline underline-offset-4' href="https://hpsmart.com">hpsmart.com</a></p>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <FaClock className='shrink-0'/>
              <p>Monday through Friday 8:00 a.m. to 10:00 p.m. / Saturday through Sunday 9:00 a.m. to 8:00 p.m. EST (excluding public holidays)</p>
            </div>
          </Card>
        </div>

      </div>

      <div className='w-full flex flex-col xl:flex-row gap-7 xl:gap-4 mt-10'>
        <div className="w-full overflow-x-auto">
          <div className='flex flex-row items-center gap-2 mb-6 text-white'>
              <FaHeadphones />
              <p className='text-white font-semibold'>Important departments</p>
          </div>
          <Table>
            <TableHead>
              <TableHeadCell>Department</TableHeadCell>
              <TableHeadCell>Phone number</TableHeadCell>
              <TableHeadCell>Extension</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  SmartFriend
                </TableCell>
                <TableCell>+1 844-814-1800</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  HP Store: Sales
                </TableCell>
                <TableCell>+1 800-565-9917</TableCell>
                <TableCell>1113121</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  HP CarePack Registration
                </TableCell>
                <TableCell>+1 800-407-6210</TableCell>
                <TableCell>2053261</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  HP Store: Order status/help
                </TableCell>
                <TableCell>+1 800-407-4005</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  Instant Ink
                </TableCell>
                <TableCell>+1 855-785-2777</TableCell>
                <TableCell>2053140</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  All-In Plan Print
                </TableCell>
                <TableCell>+1 888-447-0148</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  Laptop subscription
                </TableCell>
                <TableCell>+1 866-204-8618</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  General Warranty
                </TableCell>
                <TableCell>+1 800-474-6836</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  OfficeJet Warranty
                </TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>6400309</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  LaserJet Warranty
                </TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>6412854</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="w-full">
          <div className='flex flex-row items-center gap-2 mb-6 text-white'>
              <FaGlobe  />
              <p className='text-white font-semibold'>Useful links</p>
          </div>
          <Table>
            <TableHead>
              <TableHeadCell>Tool / Website</TableHeadCell>
              <TableHeadCell>Link</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  Global Newton
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://gnpro.houston.hp.com/gnweb.net/login.aspx">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  CDAX
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://hpcdax.crm.dynamics.com/main.aspx?appid=02f7c914-5a2c-eb11-a813-000d3af68ad4">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  Zimbra
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://zimbra-dr.concentrix.com">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  eStart
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://estart.concentrix.com">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  Jira Escalation Tracker
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://cnxmail-my.sharepoint.com/:l:/g/personal/pamela_cruz_concentrix_com/FOYvpUiOwxJNhS3p_a3TK9kBqJ1XaGVv1xDRXreAxXaD5Q?nav=ZmI3Y2E1MzMtNTk2NC00OTdkLThmYWItZDdiNmZjZDNiYmE3&xsdata=MDV8MDJ8am9zdWVhbGJlcnRvLmNoaWNhc0Bjb25jZW50cml4LmNvbXwwODg5YzY4NGM5YzM0NDQzYWNkNzA4ZGNkMWQ1YjVlZHw1OTllNTFkNjJmOGM0MzQ3OGU1OTFmNzk1YTUxYTk4Y3wwfDB8NjM4NjE1OTYzMjE1MTc5Mjg5fFVua25vd258VFdGcGJHWnNiM2Q4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazFoYVd3aUxDSlhWQ0k2TW4wPXwwfHx8&sdata=cWFCVTJmYlNlNm5IeUYyU0R3L2Q0Zkk1UDJzQWNqbnQyMVg1dXFrT3l0Zz0%3d">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  AST
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://ast.instantink.com">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  HP One Sharepoint
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://cnxmail.sharepoint.com/sites/OPSSupport/HPONEADV">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  iHub Sharepoint
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://cnxmail.sharepoint.com/sites/OPSSupport/iHUB">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  Instant Ink Sharepoint
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://cnxmail.sharepoint.com/sites/msteams_997130">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  4DX Tracker (PS)
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://forms.office.com/pages/responsepage.aspx?id=1lGeWYwvR0OOWR95WlGpjLo8hHrg-SVFsZOxYSqSa9NUMDNESlJWNDNFOFg3UlMxMFhDVkswTlo1WC4u&wdLOR=c26512891-1E02-42F0-9ECF-CB8526F3F3B1">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  4DX Tracker (Print)
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://forms.office.com/pages/responsepage.aspx?id=1lGeWYwvR0OOWR95WlGpjC7kJCptCZpIhqF39jAnVMRUOFZXNUJEV083RDhKUzNVVThNS0FHNUs1Uy4u">Open link in new tab<FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  Keylight
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://hp.prod.keylight.com/account-management/accounts">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  sNPS / CSAT Tool
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://feedback2.hp.com">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  Pulse
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://pulse.concentrix.com">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  CNXu
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://cnxu.concentrix.com">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  CNX Sharepoint
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://sharepoint.concentrix.com/sites/cvgsansalvador/cnx/SitePages/index.aspx">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  Workday
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://workday.concentrix.com">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  Transportation Request
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' target='_blank' href="https://sharepoint.concentrix.com/sites/cvgsansalvador/cnx/SitePages/Transportation.aspx">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
