export default async function getCustomerById(id) {
  const result = await fetch(`http://localhost:5000/api/customers/${id}`, {
    cache: 'no-store',
  });
  return result.json();
}
