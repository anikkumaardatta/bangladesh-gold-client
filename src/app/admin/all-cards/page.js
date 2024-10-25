// 'use client';
import { FaProjectDiagram, FaUserEdit } from 'react-icons/fa';
import { MdStreetview } from 'react-icons/md';
import getAllCustomers from '../../../../lib/getAllCustomers';
import { apiHostPath } from '../../../../secret/secret';
import Link from 'next/link';
const page = async () => {
  const getCustomers = await getAllCustomers();
  console.log(getCustomers);
  const totalCustomers = getCustomers.totalCustomer;
  const pagination = getCustomers.pagination;
  const allCustomers = getCustomers.payload.customers;
  return (
    <>
      <div className='all-cards'>
        <h1 className='text-2xl text-secondary mb-5'>All customer cards</h1>
        <div className='overflow-x-auto'>
          <div className='flex bg-white border justify-between p-2'>
            {/* Sorting */}
            <div class='flex flex-col lg:flex-row items-center space-x-2 text-xs'>
              {' '}
              <button class='py-2 px-4 bg-white text-gray-600 font-medium rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center'>
                {' '}
                10 items{' '}
                <svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5 ml-2' viewBox='0 0 20 20' fill='currentColor'>
                  {' '}
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />{' '}
                </svg>{' '}
              </button>{' '}
              <p class='text-gray-500 mt-4 lg:mt-0'>Showing 11 to 20 of 95 entires</p>{' '}
            </div>
            {/* Pagination */}
            <nav aria-label='Pagination' class='flex justify-center items-center text-gray-600 mt-8 lg:mt-0'>
              {' '}
              <a href='#' class='p-2 mr-4 rounded hover:bg-gray-100'>
                {' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  {' '}
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7' />{' '}
                </svg>{' '}
              </a>{' '}
              <a href='#' class='px-4 py-2 rounded hover:bg-gray-100'>
                {' '}
                1{' '}
              </a>{' '}
              <a href='#' class='px-4 py-2 rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100'>
                {' '}
                2{' '}
              </a>{' '}
              <a href='#' class='px-4 py-2 rounded hover:bg-gray-100'>
                {' '}
                3{' '}
              </a>{' '}
              <a href='#' class='px-4 py-2 rounded hover:bg-gray-100'>
                {' '}
                ...{' '}
              </a>{' '}
              <a href='#' class='px-4 py-2 rounded hover:bg-gray-100'>
                {' '}
                9{' '}
              </a>{' '}
              <a href='#' class='p-2 ml-4 rounded hover:bg-gray-100'>
                {' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  {' '}
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7' />{' '}
                </svg>{' '}
              </a>{' '}
            </nav>
            {/* Search bar */}
            <div className='join p-1 bg-white rounded-none'>
              <div className='bg-white'>
                <div>
                  <input
                    className='input input-bordered join-item focus:input-primary bg-white rounded-none'
                    placeholder='Search'
                  />
                </div>
              </div>
              <select className='select focus:select-primary select-bordered bg-white join-item'>
                <option disabled selected>
                  Filter
                </option>
                <option selected>All</option>
                <option>CustomerID</option>
                <option>Phone</option>
                <option>NID</option>
                <option>Name</option>
                <option>Shop Name</option>
                <option>Address</option>
              </select>
              <div className='indicator'>
                <button className='btn btn-primary join-item rounded-none ml-2 text-white'>Search</button>
              </div>
            </div>
          </div>
          <table className='table'>
            {/* head */}
            {allCustomers ? (
              <>
                <thead>
                  <tr>
                    <th>Profile</th>
                    <th>Customer ID</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allCustomers.map((customer, index) => (
                    <tr className='bg-white' key={index}>
                      <td>
                        <div className='flex items-center gap-3'>
                          <div className='avatar'>
                            <div className='mask mask-circle h-12 w-12'>
                              <img src={apiHostPath + customer.imageUrl} alt='Avatar Tailwind CSS Component' />
                            </div>
                          </div>
                          <div>
                            <div className='font-bold'>{customer.name}</div>
                            <div className='text-xs opacity-80'>{customer.shopName}</div>
                            <div className='text-xs opacity-80'>{customer.phone}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='text-lg font-bold tabular-num px-4 py-1 border-2 border-primary w-40'>
                          {customer.customerID}
                        </div>
                      </td>
                      <td>
                        <Link href={`/preview/${customer._id}`} className='btn btn-sm me-4 btn-error text-white'>
                          <FaUserEdit />
                          Edit
                        </Link>
                        <button className='btn btn-sm me-4 btn-success text-white'>
                          <MdStreetview />
                          View
                        </button>
                        <button className='btn btn-sm btn-info text-white'>
                          <FaProjectDiagram />
                          Process
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </>
            ) : (
              <h2>No customers</h2>
            )}

            {/* foot */}
          </table>
        </div>
      </div>
    </>
  );
};

export default page;
