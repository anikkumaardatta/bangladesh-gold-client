import { apiPath } from '../secret/secret';

export default async function getAllCustomers() {
  const result = await fetch(`http://localhost:5000/api/customers`, { cache: 'no-store' });
  return result.json();
}
