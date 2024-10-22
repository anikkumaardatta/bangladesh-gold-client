export default function Layout({ children }) {
  return (
    <>
      <div className='navbar bg-neutral text-neutral-content'>
        <button className='btn btn-ghost text-xl'>daisyUI</button>
      </div>
      <main>{children}</main>
    </>
  );
}
