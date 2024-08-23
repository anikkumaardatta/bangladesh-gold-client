import React from 'react';

import { BiAddToQueue } from 'react-icons/bi';
import { TbCards } from 'react-icons/tb';
import { FiEdit } from 'react-icons/fi';
import { RiPrinterCloudLine } from 'react-icons/ri';
import { MdPendingActions, MdDomainVerification } from 'react-icons/md';
import Link from 'next/link';

const Navigation = () => {
  const menuList = [
    {
      title: 'Create a new card',
      icon: <BiAddToQueue />,
      path: '/create-card',
      badge: '',
      badgeStyle: '',
    },
    {
      title: 'Edit card',
      icon: <FiEdit />,
      path: '/edit-card',
      badge: '',
      badgeStyle: '',
    },
    {
      title: 'All customer cards',
      icon: <TbCards />,
      path: '/',
      badge: '',
      badgeStyle: '',
    },
    {
      title: 'Process to printing',
      icon: <RiPrinterCloudLine />,
      path: '/process-printing',
      badge: '99',
      badgeStyle: 'px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full text-indigo-500 bg-indigo-50',
    },
    {
      title: 'Delivery pending',
      icon: <MdPendingActions />,
      path: '/delivery-pending',
      badge: '50',
      badgeStyle: 'px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full text-red-500 bg-red-50',
    },
    {
      title: 'Delivered',
      icon: <MdDomainVerification />,
      path: '/delivered',
      badge: '2908',
      badgeStyle: 'px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full text-green-500 bg-green-50',
    },
  ];
  return (
    <>
      <div class='overflow-y-auto overflow-x-hidden flex-grow'>
        <ul class='flex flex-col py-4 space-y-1'>
          <li class='px-5'>
            <div class='flex flex-row items-center h-8'>
              <div class='text-sm font-light tracking-wide text-gray-500'>Menu</div>
            </div>
          </li>
          {/* ================== */}
          {menuList.map((menuItem) => (
            <li>
              <Link
                href={menuItem.path}
                class='relative flex flex-row items-center h-11 focus:outline-none hover:bg-base-100 text-gray-600 hover:text-gray-800 border-l-8 border-transparent hover:border-primary pr-6'>
                <span class='inline-flex justify-center items-center ml-4 text-xl'>{menuItem.icon}</span>
                <span class='ml-2 text-sm tracking-wide truncate'>{menuItem.title}</span>
                {menuItem.badge && <span class={menuItem.badgeStyle}>{menuItem.badge}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
