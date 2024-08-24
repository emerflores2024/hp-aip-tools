{/* 'use client'; */}

import { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react';
import { sql } from '@vercel/postgres';
import { FaPhone, FaClock, FaGlobe, FaCircleUser, FaSquareArrowUpRight } from "react-icons/fa6";

export default async function Home() {

  const sample_sql = await  sql`SELECT * FROM test;`;
  const data_rows = sample_sql.rows;

  {/* 
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
    if (!data) return <p>No profile data</p>; */}

  return (
    <>
      <div className="gap-7 xl:gap-4 grid grid-cols-1 xl:grid-cols-3 text-gray-100">
        <div className='flex flex-col'>
          <p className='text-white font-semibold'>All-In Plan</p>
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
          <p className='text-white font-semibold'>Laptop subscription</p>
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
          <p className='text-white font-semibold'>Instant Ink</p>
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
        <div className="w-full">
          <p className='text-white font-semibold mb-6'>Important departments</p>
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
                <TableCell>Not available</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  HP Store / Sales
                </TableCell>
                <TableCell>+1 866-625-3906</TableCell>
                <TableCell>Not available</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </div>

        <div className="w-full">
          <p className='text-white font-semibold mb-6'>Useful links</p>
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
                  <a className='flex flex-row items-center gap-2' href="https://gnpro.houston.hp.com/gnweb.net/login.aspx">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  CDAX
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' href="https://hpcdax.crm.dynamics.com/main.aspx?appid=02f7c914-5a2c-eb11-a813-000d3af68ad4">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                  Zimbra
                </TableCell>
                <TableCell>
                  <a className='flex flex-row items-center gap-2' href="https://zimbra-dr.concentrix.com">Open link in new tab <FaSquareArrowUpRight /></a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

    </>
  );
}
