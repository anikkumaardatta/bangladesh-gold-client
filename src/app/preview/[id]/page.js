import React from 'react';
import getCustomerById from '../../../../lib/getCustomerById';
import cardBack from '../../../../public/assets/pdf/cardBack.svg';
import Image from 'next/image';
import '@/components/cardStyles.css';

const page = async ({ params }) => {
  const { id } = params;
  const getTheCustomer = await getCustomerById(id);
  const theCustomer = getTheCustomer.payload.customer;
  const { name, shopName, imageUrl, customerID, nid, phone, address, message } = theCustomer;

  return (
    <>
      <div className='bg-slate-50 h-full'>
        <div className='h-cm w-cm bg-white border-h'>
          <div className='ms-cm-31'>
            {/* ===========================================================================================================Back Side */}
            <div className=''>
              {/* <h2 className="text-2xl font-semibold uppercase">Preview Card</h2> */}
              <div className='card-w card-h pt-cm-1 relative hero marginBottom'>
                <Image src={cardBack} width={600} alt='Card' className='brightness-[1.05]' />
                <div className='hero-content text-left text-neutral-content'>
                  <div className='absolute h-full text-black '>
                    <div className='card-w pt-2 px-3 grid grid-cols-3'>
                      <div className=''>
                        <div className='p-0.5 w-fit bg-white'>
                          <Image src={`http://localhost:5000${imageUrl}`} width={80} height={80} alt='Card' />
                        </div>
                        <div className='m-0.5 w-[81px] font-semibold text-red-600 flex flex-col justify-center border border-red-500'>
                          {/* <div
                            style={{ fontSize: '0.15cm', padding: '0.05cm' }}
                            className='bg-red-600 text-white text-center'>
                            Customer ID
                          </div> */}
                          <div style={{ fontSize: '0.3cm' }} className='px-1 bg-white font-bold'>
                            ID : {customerID}
                          </div>
                        </div>
                      </div>
                      <div className='relative w-100 mb-1 me-1 col-span-2'>
                        <div class='relative overflow-x-auto'>
                          <ul style={{ fontSize: '0.25cm' }} className='font-medium'>
                            <li className=''>
                              <span className='font-bold mr-1'>Name :</span>
                              {name}
                            </li>
                            <li className=''>
                              <span className='font-bold mr-1'>Shop :</span>
                              {shopName}
                            </li>
                            <li className=''>
                              <span className='font-bold mr-1'>Phone :</span>
                              {phone}
                            </li>
                            <li className=''>
                              <span className='font-bold mr-1'>NID No :</span>
                              {nid}
                            </li>
                            <li className=''>
                              <span className='font-bold mr-1'>Address :</span>
                              {address}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>Name:= {name}</h1>
        <h1>Shop Name:= {shopName}</h1>
        <h1>Address:= {address}</h1>
        <h1>ID:= {customerID}</h1>
        <h1>NID:= {nid}</h1>
        <h1>Phone:= {phone}</h1>
        <h1>Note:= {message}</h1>
      </div>
    </>
  );
};

export default page;
