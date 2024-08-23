'use client';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <form className='grid grid-cols-2 gap-8 items-center' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-control'>
        <label className='label'>
          {errors.name ? (
            <span className='label-text text-pink-600' role='alert'>
              {errors.name?.message}
            </span>
          ) : (
            <span className='label-text'>Name</span>
          )}
        </label>
        <input
          {...register('name', {
            required: 'Contact number is required',
          })}
          type='text'
          placeholder='Full Name'
          className='input input-bordered focus:input-primary bg-white rounded-none'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          {errors.shopName ? (
            <span className='label-text text-pink-600' role='alert'>
              {errors.shopName?.message}
            </span>
          ) : (
            <span className='label-text'>Shop Name</span>
          )}
        </label>
        <input
          {...register('shopName', {
            required: 'Shop Name is required',
          })}
          type='text'
          placeholder='Shop Name'
          className='input input-bordered focus:input-primary bg-white rounded-none'
        />
      </div>
      <input type='submit' />
    </form>
  );
};

export default RegistrationForm;
