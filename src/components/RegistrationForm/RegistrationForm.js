'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaArrowsRotate } from 'react-icons/fa6';
import { RiImageAddFill } from 'react-icons/ri';

const RegistrationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // States
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

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
        toast.success('You did it!');
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
    // <form className='items-center max-w-[1200px] m-auto' onSubmit={onSubmit}>
    //   <div className='flex items-center justify-center w-full'></div>
    //   <div className='flex flex-col m-auto mb-8 border-primary items-center justify-center w-[260px] h-[260px] border-2 border-dashed bg-white '>
    //     {imagePreviewUrl ? (
    //       <div className='w-full max-w-sm bg-slate-300 border-gray-200 shadow'>
    //         <div className='flex flex-col items-center p-2'>
    //           <img
    //             className='w-[200px] h-[200px] border-4 border-primary bg-white shadow-lg'
    //             src={imagePreviewUrl}
    //             alt='Preview image'
    //           />
    //           <label htmlFor='dropzone-file' className='btn btn-secondary btn-sm mt-2 rounded-none'>
    //             <FaArrowsRotate />
    //             Change Image
    //           </label>
    //         </div>
    //       </div>
    //     ) : (
    //       <label
    //         htmlFor='dropzone-file'
    //         className='flex flex-col items-center justify-center pt-5 pb-6 w-48 h-48 cursor-pointer hover:shadow-xl'>
    //         <div className='text-gray-500 text-4xl m-2'>
    //           <RiImageAddFill />
    //         </div>
    //         <p className='mb-2 text-sm text-gray-500 '>
    //           <span className='font-semibold'>Click to upload</span>
    //         </p>
    //         <p className='text-xs text-gray-500 '>
    //           JPEG, JPG or PNG <br />
    //           (MAX. 800x400px)
    //         </p>
    //       </label>
    //     )}
    //     <input id='dropzone-file' name='customerImage' type='file' className='hidden' onChange={handleImagePreview} />
    //   </div>
    //   <div className='grid grid-cols-2 gap-8 items-center'>
    //     <div className='form-control'>
    //       <label className='label'>
    //         <span className='label-text'>Name</span>
    //       </label>
    //       <input
    //         required
    //         type='text'
    //         placeholder='Full Name'
    //         className='input input-bordered focus:input-primary bg-white rounded-none'
    //       />
    //     </div>
    //     <div className='form-control'>
    //       <label className='label'>
    //         <span className='label-text'>Shop Name</span>
    //       </label>
    //       <input
    //         required
    //         type='text'
    //         placeholder='Shop Name'
    //         className='input input-bordered focus:input-primary bg-white rounded-none'
    //       />
    //     </div>
    //     <div className='form-control'>
    //       <label className='label'>
    //         <span className='label-text'>Address</span>
    //       </label>
    //       <input
    //         required
    //         type='text'
    //         placeholder='Address'
    //         className='input input-bordered focus:input-primary bg-white rounded-none'
    //       />
    //     </div>
    //     <div className='form-control'>
    //       <label className='label'>
    //         <span className='label-text'>Phone</span>
    //       </label>
    //       <input
    //         required
    //         type='text'
    //         placeholder='Contact number'
    //         className='input input-bordered focus:input-primary bg-white rounded-none'
    //       />
    //     </div>
    //     <div className='form-control'>
    //       <label className='label'>
    //         <span className='label-text'>CustomerID</span>
    //       </label>
    //       <input
    //         required
    //         type='text'
    //         placeholder='Customer ID'
    //         className='input input-bordered focus:input-primary bg-white rounded-none'
    //       />
    //     </div>
    //     <div className='form-control'>
    //       <label className='label'>
    //         <span className='label-text'>NID</span>
    //       </label>
    //       <input
    //         required
    //         type='text'
    //         placeholder='NID (National ID card number)'
    //         className='input input-bordered focus:input-primary bg-white rounded-none'
    //       />
    //     </div>
    //   </div>
    //   <input type='submit' className='btn btn-primary btn-block rounded-none my-8' />
    // </form>
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
      <input type='submit' className='btn btn-primary btn-block rounded-none my-8' />
    </form>
  );
};

export default RegistrationForm;
