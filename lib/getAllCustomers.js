export default async function getAllCustomers(search = '', filter = '') {
  const result = await fetch(`http://localhost:5000/api/customers?search=${search}&filter=${filter}`, {
    cache: 'no-store',
  });
  console.log(`http://localhost:5000/api/customers?search=${search}&filter=${filter}`);
  return result.json();
}
