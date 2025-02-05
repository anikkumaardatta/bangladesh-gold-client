'use client';

import { FaProjectDiagram, FaUserEdit } from 'react-icons/fa';
import { MdStreetview } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import getAllCustomers from '../../../../lib/getAllCustomers';
import { apiHostPath } from '../../../../secret/secret';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const CustomersPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 10;
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  const [customers, setCustomers] = useState([]);
  const [pagination, setPagination] = useState({ totalPage: 1, currentPage: 1, previousPage: null, nextPage: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      const data = await getAllCustomers(searchQuery, '', page, limit);
      setCustomers(data?.payload?.customers || []);
      setPagination(data?.payload?.pagination || { totalPage: 1, currentPage: 1, previousPage: null, nextPage: null });
      setLoading(false);
    };
    fetchCustomers();
  }, [page, limit, searchQuery]);

  const handlePageChange = (newPage) => {
    router.push(`/admin/all-cards?page=${newPage}&limit=${limit}`);
  };

  const handleLimitChange = (event) => {
    router.push(`/admin/all-cards?page=1&limit=${event.target.value}`);
  };

  const pageNumbers = Array.from({ length: pagination.totalPage }, (_, i) => i + 1).slice(
    Math.max(0, pagination.currentPage - 3),
    pagination.currentPage + 2
  );

  return (
    <div className='all-cards'>
      <h1 className='text-2xl text-secondary mb-5'>All customer cards</h1>
      <div class='box-wrapper'>
        <div class=' bg-white rounded flex items-center w-full py-1 px-3 shadow-sm border border-gray-200'>
          <select
            value={limit}
            onChange={handleLimitChange}
            className='border py-2 px-4 me-5 bg-white text-gray-600 font-medium rounded hover:bg-gray-100 active:bg-gray-200'>
            {[10, 20, 50, 100].map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
          <button click='getImages()' class='outline-none focus:outline-none'>
            <svg
              class=' w-5 text-gray-600 h-5 cursor-pointer'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
            </svg>
          </button>
          <input
            type='text'
            placeholder='Search by name, shop, phone, ID...'
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              router.push(`/admin/all-cards?page=1&limit=${limit}&search=${e.target.value}`);
            }}
            class='w-full pl-4 text-sm outline-none focus:outline-none bg-transparent'
          />
          <select className='select rounded-none'>
            <option selected>All</option>
            <option disabled>Name</option>
            <option disabled>Shop Name</option>
            <option disabled>Customer ID</option>
            <option disabled>NID</option>
            <option disabled>Phone</option>
            <option disabled>Address</option>
          </select>
        </div>
      </div>
      <div className='overflow-x-auto'>
        {/* Customer List */}
        {loading ? (
          <p className='text-center text-lg'>Loading...</p>
        ) : customers.length ? (
          <table className='table'>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Customer ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr className='bg-white' key={customer._id}>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='mask mask-circle h-12 w-12'>
                          <img src={`${apiHostPath}${customer.imageUrl}`} alt={customer.name} />
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
                      <FaUserEdit /> Edit
                    </Link>
                    <button className='btn btn-sm me-4 btn-success text-white'>
                      <MdStreetview /> View
                    </button>
                    <button className='btn btn-sm btn-info text-white'>
                      <FaProjectDiagram /> Process
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className='block text-2xl font-semibold text-error bg-white p-10 text-center'>
            No customer records found. <br />
            Please{' '}
            <Link className='py-5 text-secondary hover:text-primary link' href='/admin/create-card'>
              create a new customer.
            </Link>
          </div>
        )}
        <div className='flex bg-white border justify-between p-2'>
          {/* Sorting */}
          <select
            value={limit}
            onChange={handleLimitChange}
            className='border py-2 px-4 bg-white text-gray-600 font-medium rounded hover:bg-gray-100 active:bg-gray-200'>
            {[10, 20, 50, 100].map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>

          {/* Pagination */}
          <nav className='flex justify-center items-center text-gray-600'>
            {pagination.previousPage && (
              <button
                onClick={() => handlePageChange(pagination.previousPage)}
                className='p-2 mr-4 rounded hover:bg-gray-100'>
                <IoIosArrowBack />
              </button>
            )}

            {pageNumbers.map((num) => (
              <button
                key={num}
                onClick={() => handlePageChange(num)}
                className={`px-4 py-2 rounded ${num === page ? 'bg-gray-200' : 'hover:bg-gray-100'}`}>
                {num}
              </button>
            ))}

            {pagination.nextPage && (
              <button
                onClick={() => handlePageChange(pagination.nextPage)}
                className='p-2 ml-4 rounded hover:bg-gray-100'>
                <IoIosArrowForward />
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
