'use client';
import React from 'react';

import { BiAddToQueue } from 'react-icons/bi';
import { TbCards } from 'react-icons/tb';
import { FiEdit } from 'react-icons/fi';
import { RiPrinterCloudLine } from 'react-icons/ri';
import { MdPendingActions, MdDomainVerification } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const menuList = [
    {
      title: 'Create a new card',
      icon: <BiAddToQueue />,
      path: '/admin/create-card',
      badge: '',
      badgeStyle: '',
    },
    {
      title: 'Edit card',
      icon: <FiEdit />,
      path: '/admin/edit-card',
      badge: '',
      badgeStyle: '',
    },
    {
      title: 'All customer cards',
      icon: <TbCards />,
      path: '/admin/all-cards',
      badge: '',
      badgeStyle: '',
    },
    {
      title: 'Process to printing',
      icon: <RiPrinterCloudLine />,
      path: '/admin/process-printing',
      badge: '99',
      badgeStyle: 'px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full text-indigo-500 bg-indigo-50',
    },
    {
      title: 'Delivery pending',
      icon: <MdPendingActions />,
      path: '/admin/delivery-pending',
      badge: '50',
      badgeStyle: 'px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full text-red-500 bg-red-50',
    },
    {
      title: 'Delivered',
      icon: <MdDomainVerification />,
      path: '/admin/delivered',
      badge: '2908',
      badgeStyle: 'px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full text-green-500 bg-green-50',
    },
  ];

  const pathName = usePathname();
  const isActive = (path) => path === pathName;

  return (
    <>
      <div className='overflow-y-auto overflow-x-hidden flex-grow'>
        <ul className='flex flex-col py-4 space-y-1'>
          <li className='px-5'>
            <div className='flex flex-row items-center h-8'>
              <div className='text-sm font-light tracking-wide text-gray-500'>Menu</div>
            </div>
          </li>
          {/* ================== */}
          {menuList.map((menuItem) => (
            <li>
              <Link
                href={menuItem.path}
                className={
                  isActive(menuItem.path)
                    ? 'relative flex flex-row items-center h-12 focus:outline-none pr-6 border-l-8  bg-base-100 text-gray-900 border-primary'
                    : 'relative flex flex-row items-center transition-all duration-300 hover:translate-x-1 h-12 focus:outline-none text-gray-600 pr-6 border-l-8 border-transparent hover:bg-slate-100 hover:text-gray-700 hover:border-primary'
                }>
                <span className='inline-flex justify-center items-center ml-4 text-2xl'>{menuItem.icon}</span>
                <span className='ml-2 text-md tracking-wide truncate'>{menuItem.title}</span>
                {menuItem.badge && <span className={menuItem.badgeStyle}>{menuItem.badge}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
