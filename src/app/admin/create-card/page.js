import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import React from 'react';

const page = () => {
  return (
    <div className=''>
      <h1 className='text-2xl text-secondary mb-5'>Create a new card</h1>
      <div className='w-auto flex justify-center'>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default page;
