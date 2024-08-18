import React from 'react';

import { BiAddToQueue } from 'react-icons/bi';
import { TbCards } from 'react-icons/tb';
import { FiEdit } from 'react-icons/fi';
import { RiPrinterCloudLine } from 'react-icons/ri';
import { MdPendingActions, MdDomainVerification } from 'react-icons/md';
import Link from 'next/link';

const Navigation = () => {
  return (
    <>
      <div class='overflow-y-auto overflow-x-hidden flex-grow'>
        <ul class='flex flex-col py-4 space-y-1'>
          <li class='px-5'>
            <div class='flex flex-row items-center h-8'>
              <div class='text-sm font-light tracking-wide text-gray-500'>Action</div>
            </div>
          </li>
          <li>
            <Link
              href='/create-card'
              class='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6'>
              <span class='inline-flex justify-center items-center ml-4 text-xl'>
                <BiAddToQueue />
              </span>
              <span class='ml-2 text-sm tracking-wide truncate'>Create a new card</span>
            </Link>
          </li>
          <li>
            <Link
              href='/action'
              class='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6'>
              <span class='inline-flex justify-center items-center ml-4 text-xl'>
                <FiEdit />
              </span>
              <span class='ml-2 text-sm tracking-wide truncate'>Edit card</span>
            </Link>
          </li>
          <li class='px-5'>
            <div class='flex flex-row items-center h-8'>
              <div class='text-sm font-light tracking-wide text-gray-500'>Menu</div>
            </div>
          </li>

          <li>
            <Link
              href='/action'
              class='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6'>
              <span class='inline-flex justify-center items-center ml-4 text-xl'>
                <TbCards />
              </span>
              <span class='ml-2 text-sm tracking-wide truncate'>All customer cards</span>
              <span class='px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full'>
                New
              </span>
            </Link>
          </li>
          <li>
            <Link
              href='/action'
              class='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6'>
              <span class='inline-flex justify-center items-center ml-4 text-xl'>
                <RiPrinterCloudLine />
              </span>
              <span class='ml-2 text-sm tracking-wide truncate'>Process to printing</span>
              <span class='px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full'>
                1.2k
              </span>
            </Link>
          </li>
          <li>
            <Link
              href='/action'
              class='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6'>
              <span class='inline-flex justify-center items-center ml-4 text-xl'>
                <MdPendingActions />
              </span>
              <span class='ml-2 text-sm tracking-wide truncate'>Delivery pending</span>
            </Link>
          </li>
          <li>
            <Link
              href='/action'
              class='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6'>
              <span class='inline-flex justify-center items-center ml-4 text-xl'>
                <MdDomainVerification />
              </span>
              <span class='ml-2 text-sm tracking-wide truncate'>Delivered</span>
              <span class='px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full'>
                15
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
