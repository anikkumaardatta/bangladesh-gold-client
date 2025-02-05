import Link from 'next/link';
import { BiAddToQueue } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import { MdDomainVerification, MdPendingActions } from 'react-icons/md';
import { RiPrinterCloudLine } from 'react-icons/ri';
import { TbCards } from 'react-icons/tb';

export default function Home() {
  const menuList = [
    {
      title: 'Create a new card',
      icon: <BiAddToQueue />,
      path: '/admin/create-card',
      styleSheet: {
        parentSpan:
          'absolute top-10 z-0 h-20 w-20 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-[10]',
        childSpan:
          'grid h-20 w-20 place-items-center rounded-full bg-green-500 transition-all duration-300 group-hover:bg-green-400',
      },
    },
    {
      title: 'All customer cards',
      icon: <TbCards />,
      path: '/admin/all-cards',
      styleSheet: {
        parentSpan:
          'absolute top-10 z-0 h-20 w-20 rounded-full bg-pink-500 transition-all duration-300 group-hover:scale-[10]',
        childSpan:
          'grid h-20 w-20 place-items-center rounded-full bg-pink-500 transition-all duration-300 group-hover:bg-pink-400',
      },
    },
    {
      title: 'Process to printing',
      icon: <RiPrinterCloudLine />,
      path: '/admin/process-printing',
      styleSheet: {
        parentSpan:
          'absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]',
        childSpan:
          'grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400',
      },
    },
    {
      title: 'Delivery pending',
      icon: <MdPendingActions />,
      path: '/admin/delivery-pending',
      styleSheet: {
        parentSpan:
          'absolute top-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10]',
        childSpan:
          'grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-orange-400',
      },
    },
    {
      title: 'Card Delivered',
      icon: <MdDomainVerification />,
      path: '/admin/delivered',
      styleSheet: {
        parentSpan:
          'absolute top-10 z-0 h-20 w-20 rounded-full bg-purple-500 transition-all duration-300 group-hover:scale-[10]',
        childSpan:
          'grid h-20 w-20 place-items-center rounded-full bg-purple-500 transition-all duration-300 group-hover:bg-purple-400',
      },
    },
  ];
  return (
    <>
      <div class='max-w-[1980px] mx-auto px-10 relative flex gap-4 min-h-screen justify-center overflow-hidden bg-gray-50 sm:py-12'>
        <h1></h1>
        {menuList.map((menu) => (
          <Link
            href={menu.path}
            class='group w-96 h-64 relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10'>
            <span class={menu.styleSheet.parentSpan}></span>
            <div class='relative z-10 mx-auto max-w-md'>
              <span class={menu.styleSheet.childSpan}>
                <span className='text-white text-3xl'>{menu.icon}</span>
              </span>
              <div class='space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90'>
                <span className='text-xl font-semibold'>{menu.title}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
