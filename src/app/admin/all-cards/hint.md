No problem at all! We can achieve the same functionality without using Ant Design. Let's use plain HTML and CSS along with React to implement pagination for your Next.js project.

Here's how you can do it:

1. **Create a Table Component**:
   Create a new component to fetch and display the data with pagination.

   ```jsx
   // components/CustomerTable.js
   import React, { useState, useEffect } from 'react';

   const CustomerTable = () => {
     const [data, setData] = useState([]);
     const [pagination, setPagination] = useState({
       current: 1,
       pageSize: 10,
       total: 0,
       totalPages: 1,
     });
     const [loading, setLoading] = useState(false);

     useEffect(() => {
       fetchData(pagination.current, pagination.pageSize);
     }, [pagination.current]);

     const fetchData = async (page, pageSize) => {
       setLoading(true);
       const response = await fetch(`/api/your-endpoint?page=${page}&pageSize=${pageSize}`);
       const result = await response.json();
       if (result.success) {
         setData(result.payload.customers);
         setPagination({
           current: result.payload.pagination.currentPage,
           pageSize: pageSize,
           total: result.payload.totalCustomer,
           totalPages: result.payload.pagination.totalPage,
         });
       }
       setLoading(false);
     };

     const handlePageChange = (page) => {
       setPagination({
         ...pagination,
         current: page,
       });
     };

     const renderTable = () => {
       if (loading) {
         return <p>Loading...</p>;
       }

       return (
         <table>
           <thead>
             <tr>
               <th>Name</th>
               <th>Shop Name</th>
               <th>Customer ID</th>
               <th>Phone</th>
               <th>Address</th>
               {/* Add more columns as needed */}
             </tr>
           </thead>
           <tbody>
             {data.map((customer) => (
               <tr key={customer._id}>
                 <td>{customer.name}</td>
                 <td>{customer.shopName}</td>
                 <td>{customer.customerID}</td>
                 <td>{customer.phone}</td>
                 <td>{customer.address}</td>
               </tr>
             ))}
           </tbody>
         </table>
       );
     };

     const renderPagination = () => {
       const pages = [];
       for (let i = 1; i <= pagination.totalPages; i++) {
         pages.push(
           <button key={i} onClick={() => handlePageChange(i)} disabled={i === pagination.current}>
             {i}
           </button>
         );
       }

       return <div>{pages}</div>;
     };

     return (
       <div>
         {renderTable()}
         {renderPagination()}
       </div>
     );
   };

   export default CustomerTable;
   ```

2. **Add API Route**:
   Add an API route in Next.js to handle data fetching.

   ```javascript
   // pages/api/customers.js
   export default async function handler(req, res) {
     const { page = 1, pageSize = 10 } = req.query;

     // Your database fetching logic here
     // For demonstration, I'm using the mock data you provided

     const mockData = {
       success: true,
       message: 'Customers fetched successfully!',
       payload: {
         totalCustomer: 7,
         pagination: {
           totalPage: 1,
           currentPage: parseInt(page),
           previousPage: page > 1 ? page - 1 : null,
           nextPage: page < 1 ? parseInt(page) + 1 : null,
         },
         customers: [
           // Your customers data here
         ],
       },
     };

     const customers = mockData.payload.customers.slice((page - 1) * pageSize, page * pageSize);
     const totalCustomer = mockData.payload.totalCustomer;

     res.status(200).json({
       success: true,
       message: 'Customers fetched successfully!',
       payload: {
         totalCustomer,
         pagination: mockData.payload.pagination,
         customers,
       },
     });
   }
   ```

3. **Integrate the Table Component**:
   Use the `CustomerTable` component in your main application.

   ```jsx
   // pages/index.js
   import React from 'react';
   import CustomerTable from '../components/CustomerTable';

   const Home = () => {
     return (
       <div style={{ padding: '20px' }}>
         <h1>Customer List</h1>
         <CustomerTable />
       </div>
     );
   };

   export default Home;
   ```

With this setup, you should have a paginated table in your Next.js project without using Ant Design. If you need any more customization or run into issues, feel free to ask!
