import { Toaster } from 'react-hot-toast';
import Navigation from '@/components/Navigation/Navigation';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <div className='flex h-full'>
        <div className='w-80 flex fixed top-0 flex-col bg-white h-full'>
          <Link
            href={'/'}
            className='flex bg-primary text-white font-semibold items-center justify-center h-14 border-b'>
            Bangladesh Gold ID-card Builder
          </Link>
          <Navigation />
        </div>
        <Toaster position='bottom-center' />
        <div className='w-full mx-10 my-5 ml-[350px]'>{children}</div>
      </div>
    </>
  );
}
