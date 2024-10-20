export default async function getServerStatus(search = '', filter = '') {
  const result = await fetch(`http://localhost:5000`, {
    cache: 'no-store',
  });
  return result.json();
}
