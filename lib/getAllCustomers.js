export default async function getAllCustomers(search = '', filter = 'all', page = 1, limit = 10) {
  const result = await fetch(
    `http://localhost:5000/api/customers/?search=${search}&filter=${filter}&page=${page}&limit=${limit}`,

    {
      cache: 'no-store',
    }
  );

  console.log(
    `================================================================http://localhost:5000/api/customers/?search=${search}&filter=${filter}&page=${page}&limit=${limit}`
  );
  return result.json();
}
