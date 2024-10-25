export default async function getAllCustomers(search = '', filter = '') {
  const result = await fetch(`http://localhost:5000/api/customers?search=${search}&filter=${filter}`, {
    cache: 'no-store',
  });
  return result.json();
}
