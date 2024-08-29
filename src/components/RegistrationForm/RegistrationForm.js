'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RiImageAddFill } from 'react-icons/ri';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [file, setFile] = useState([]);
  const [preview, setPreview] = useState();

  // console.log(watch('example')); // watch input value by passing the name of it

  //   rendering previews

  useEffect(() => {
    if (!file) {
      return;
    }

    let temp = [];

    temp.push(URL.createObjectURL(file[0]));
    const objectURLs = temp;
    setPreview(objectURLs);
    //free memory
    for (let i = 0; i < array.length; i++) {
      return () => {
        URL.revokeObjectURL(objectURLs[i]);
      };
    }
  }, [file]);

  return (
    <form className='items-center max-w-[1200px] m-auto' onSubmit={handleSubmit(onSubmit)}>
      <div class='flex items-center justify-center w-full'></div>
      <label
        for='dropzone-file'
        class='flex flex-col m-auto border-primary items-center justify-center w-[260px] h-[260px] border-2 border-dashed cursor-pointer bg-white hover:bg-slate-50 hover:bg-gray-10'>
        {/* <div class='flex flex-col items-center justify-center pt-5 pb-6 border w-48 h-48'>
          <div className='text-gray-500 text-4xl m-2'>
            <RiImageAddFill />
          </div>
          <p class='mb-2 text-sm text-gray-500 '>
            <span class='font-semibold'>Click to upload</span>
          </p>
          <p class='text-xs text-gray-500 '>
            JPEG, JPG or PNG <br />
            (MAX. 800x400px)
          </p>
        </div> */}
        <div className='justify-center'>{console.log(preview)}</div>
        <input
          id='dropzone-file'
          type='file'
          class='hidden'
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setFile(e.target.files);
            }
            console.log(file, 'j');
          }}
        />
      </label>
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
