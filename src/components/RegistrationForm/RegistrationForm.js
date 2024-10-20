'use client';
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaArrowsRotate } from 'react-icons/fa6';
import { RiImageAddFill } from 'react-icons/ri';
import { BsInfoLg } from 'react-icons/bs';

import getAllCustomers from '../../../lib/getAllCustomers';

const RegistrationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const router = useRouter();
  // States
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [totalResult, setTotalResult] = useState(0);

  const checkIsCustomerExist = async (event) => {
    const filter = event.target.name;
    const searchKey = event.target.value;
    try {
      const getCustomers = await getAllCustomers(searchKey, filter);
      const allCustomers = getCustomers.payload.customers;
      setTotalResult(allCustomers);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCustomerCreate = async (customerData) => {
    const { name, shopName, customerID, nid, phone, address, message } = customerData;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('shopName', shopName);
    formData.append('customerID', customerID);
    formData.append('nid', nid);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('message', message);

    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput.files.length > 0) {
      formData.append('customerImage', fileInput.files[0]);
    }

    const postDataURL = 'http://localhost:5000/api/customers/create-id';

    try {
      setLoading(true);
      const res = await fetch(postDataURL, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success == true) {
        toast.custom(
          <div
            id='toast-success'
            class='flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800'
            role='alert'>
            <div class='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'>
              <svg
                class='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'>
                <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
              </svg>
              <span class='sr-only'>Check icon</span>
            </div>
            <div class='ms-3 text-sm font-normal'>Customer created successfully.</div>
            <button
              type='button'
              class='ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
              data-dismiss-target='#toast-success'
              aria-label='Close'>
              <span class='sr-only'>Close</span>
              <svg
                class='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
            </button>
          </div>
        );
        router.push('/all-cards');
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleImagePreview = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImagePreviewUrl(imageUrl);
  };
  return (
    <div className=''>
      <button className='text-lg p-4 bg-white border-primary mt-5 -mb-96 sticky top-0'>
        {totalResult.length > 0 ? (
          <div className='text-xl  text-red-500'>{totalResult.length} customer found</div>
        ) : (
          <div className='text-green-500'>No customer found</div>
        )}
      </button>
      <form className='items-center max-w-[1200px] m-auto' onSubmit={handleSubmit(handleCustomerCreate)}>
        <div className='flex items-center justify-center w-full'></div>
        <div className='flex flex-col m-auto mb-8 border-primary items-center justify-center w-[260px] h-[260px] border-2 border-dashed bg-white '>
          {imagePreviewUrl ? (
            <div className='w-full max-w-sm bg-slate-300 border-gray-200 shadow'>
              <div className='flex flex-col items-center p-2'>
                <img
                  className='w-[200px] h-[200px] border-4 border-primary bg-white shadow-lg'
                  src={imagePreviewUrl}
                  alt='Preview image'
                />
                <label htmlFor='dropzone-file' className='btn btn-secondary btn-sm mt-2 rounded-none'>
                  <FaArrowsRotate />
                  Change Image
                </label>
              </div>
            </div>
          ) : (
            <label
              htmlFor='dropzone-file'
              className='flex flex-col items-center justify-center pt-5 pb-6 w-48 h-48 cursor-pointer hover:shadow-xl'>
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
          <input
            {...register('customerImage', {
              required: 'Customer image is required',
            })}
            id='dropzone-file'
            type='file'
            className='hidden'
            onChange={handleImagePreview}
          />
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
              onChange={checkIsCustomerExist}
              type='text'
              placeholder='Contact number'
              className='input input-bordered focus:input-primary bg-white rounded-none'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              {errors.customerID ? (
                <span className='label-text text-red-500' role='alert'>
                  {errors.customerID?.message}
                </span>
              ) : (
                <span className='label-text'>CustomerID</span>
              )}
            </label>
            <input
              {...register('customerID', {
                required: `Customer id is required`,
              })}
              onChange={checkIsCustomerExist}
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
              onChange={checkIsCustomerExist}
              type='text'
              placeholder='NID (National ID card number)'
              className='input input-bordered focus:input-primary bg-white rounded-none'
            />
          </div>
        </div>
        <div className='form-control'>
          <label className='label mt-6'>
            {errors.message ? (
              <span className='label-text text-red-500' role='alert'>
                {errors.message?.message}
              </span>
            ) : (
              <span className='label-text'>Message / Note (Optional)</span>
            )}
          </label>
          <textarea
            {...register('message', {})}
            type='text'
            placeholder='Message (optional)'
            className='textarea input-bordered focus:input-primary bg-white rounded-none'></textarea>
        </div>
        <input
          type='submit'
          className={
            totalResult.length > 0
              ? 'btn btn-error btn-block rounded-none my-8'
              : 'btn btn-primary btn-block rounded-none my-8'
          }
        />
      </form>
    </div>
  );
};

export default RegistrationForm;
