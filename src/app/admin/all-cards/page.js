// 'use client';
import { FaProjectDiagram, FaUserEdit } from 'react-icons/fa';
import { MdStreetview } from 'react-icons/md';
import getAllCustomers from '../../../../lib/getAllCustomers';
import { apiHostPath } from '../../../../secret/secret';
import Link from 'next/link';
const page = async () => {
  const getCustomers = await getAllCustomers();
  const allCustomers = getCustomers.payload.customers;
  return (
    <>
      <div className='all-cards'>
        <h1 className='text-2xl text-secondary mb-5'>All customer cards</h1>
        <div className='overflow-x-auto'>
          <div className='flex justify-end'>
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
            <tfoot>
              <tr>
                <th>Profile</th>
                <th>Customer ID</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default page;
