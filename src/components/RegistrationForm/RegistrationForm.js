'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowsRotate } from 'react-icons/fa6';
import { RiImageAddFill } from 'react-icons/ri';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // console.log(file);
    const imageUrl = URL.createObjectURL(file);
    setImagePreviewUrl(imageUrl);
  };

  return (
    <form className='items-center max-w-[1200px] m-auto' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex items-center justify-center w-full'></div>
      <div className='flex flex-col m-auto border-primary items-center justify-center w-[260px] h-[260px] border-2 border-dashed bg-white '>
        {imagePreviewUrl ? (
          <div className='w-full max-w-sm bg-slate-300 border-gray-200 shadow'>
            <div className='flex flex-col items-center p-2'>
              <img
                className='w-[200px] h-[200px] border-4 border-secondary bg-white shadow-lg'
                src={imagePreviewUrl}
                alt='Selected image'
              />
              <div className='flex mt-2'>
                <label htmlFor='dropzone-file' className='btn btn-secondary btn-sm rounded-none'>
                  <FaArrowsRotate />
                  Change Image
                </label>
              </div>
            </div>
          </div>
        ) : (
          <label
            htmlFor='dropzone-file'
            className='flex flex-col items-center justify-center pt-5 pb-6 border w-48 h-48 cursor-pointer hover:shadow-xl'>
            <div className='text-gray-500 text-4xl m-2'>
              <RiImageAddFill />
            </div>
            <p className='mb-2 text-sm text-gray-500 '>
              <span className='font-semibold'>Click to upload</span>
            </p>
            <p className='text-xs text-gray-500 '>
              JPEG, JPG or PNG <br />
              (MAX. 800x400px)
            </p>
          </label>
        )}
        <input id='dropzone-file' type='file' className='hidden' onChange={handleImageUpload} />
      </div>
      <div className='grid grid-cols-2 gap-8 items-center'>
        <div className='form-control'>
          <label className='label'>
            {errors.name ? (
              <span className='label-text text-red-500' role='alert'>
                {errors.name?.message}
              </span>
            ) : (
              <span className='label-text'>Name</span>
            )}
          </label>
          <input
            {...register('name', {
              required: 'Customer name is required',
            })}
            type='text'
            placeholder='Full Name'
            className='input input-bordered focus:input-primary bg-white rounded-none'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            {errors.shopName ? (
              <span className='label-text text-red-500' role='alert'>
                {errors.shopName?.message}
              </span>
            ) : (
              <span className='label-text'>Shop Name</span>
            )}
          </label>
          <input
            {...register('shopName', {
              required: `Shop Name is required`,
            })}
            type='text'
            placeholder='Shop Name'
            className='input input-bordered focus:input-primary bg-white rounded-none'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            {errors.address ? (
              <span className='label-text text-red-500' role='alert'>
                {errors.address?.message}
              </span>
            ) : (
              <span className='label-text'>Address</span>
            )}
          </label>
          <input
            {...register('address', {
              required: `Address is required`,
            })}
            type='text'
            placeholder='Address'
            className='input input-bordered focus:input-primary bg-white rounded-none'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            {errors.phone ? (
              <span className='label-text text-red-500' role='alert'>
                {errors.phone?.message}
              </span>
            ) : (
              <span className='label-text'>Phone</span>
            )}
          </label>
          <input
            {...register('phone', {
              required: `Contact number is required`,
            })}
            type='text'
            placeholder='Contact number'
            className='input input-bordered focus:input-primary bg-white rounded-none'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            {errors.customerId ? (
              <span className='label-text text-red-500' role='alert'>
                {errors.customerId?.message}
              </span>
            ) : (
              <span className='label-text'>CustomerID</span>
            )}
          </label>
          <input
            {...register('customerId', {
              required: `Customer id is required`,
            })}
            type='text'
            placeholder='Customer ID'
            className='input input-bordered focus:input-primary bg-white rounded-none'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            {errors.nid ? (
              <span className='label-text text-red-500' role='alert'>
                {errors.nid?.message}
              </span>
            ) : (
              <span className='label-text'>NID</span>
            )}
          </label>
          <input
            {...register('nid', {
              required: `NID is required`,
            })}
            type='text'
            placeholder='NID (National ID card number)'
            className='input input-bordered focus:input-primary bg-white rounded-none'
          />
        </div>
      </div>
      <input type='submit' className='btn btn-primary btn-block rounded-none my-8' />
    </form>
  );
};

export default RegistrationForm;
