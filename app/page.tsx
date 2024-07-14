{/* 'use client'; */}

import { useState, useEffect, use } from 'react';
import { Card } from 'flowbite-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react';
import { Spinner } from 'flowbite-react';
import { sql } from '@vercel/postgres';

export default async function Home() {

  const sample_sql = await sql`SELECT * FROM test;`;
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
      {data_rows.map((row) => (
            <ul key={row.id}>
              <li>{row.id}</li>
              <li>{row.name}</li>
            </ul>
          ))}
      <div className="flex flex-row gap-7">
        <Card className="max-w-sm bg-amber-100">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            10
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
            Pending cases
          </p>
        </Card>
        <Card className="max-w-sm bg-green-100">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            3
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
            Resolved cases
          </p>
        </Card>
        <Card className="max-w-sm bg-sky-100">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            5
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
            Closed cases
          </p>
        </Card>
      </div>

      <div className="overflow-x-auto mt-10">
        <Table hoverable>
          <TableHead>
            <TableHeadCell>Product name</TableHeadCell>
            <TableHeadCell>Color</TableHeadCell>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Edit</span>
            </TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {'Apple MacBook Pro 17"'}
              </TableCell>
              <TableCell>Sliver</TableCell>
              <TableCell>Laptop</TableCell>
              <TableCell>$2999</TableCell>
              <TableCell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Microsoft Surface Pro
              </TableCell>
              <TableCell>White</TableCell>
              <TableCell>Laptop PC</TableCell>
              <TableCell>$1999</TableCell>
              <TableCell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Magic Mouse 2
              </TableCell>
              <TableCell>Black</TableCell>
              <TableCell>Accessories</TableCell>
              <TableCell>$99</TableCell>
              <TableCell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
