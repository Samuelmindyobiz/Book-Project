import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  let { pathname } = useLocation();
  return (
    <nav className='nav font-geist fixed bottom-3 right-3 flex gap-2'>
      {pathname !== '/' && (
        <Link
          to='/'
          className='text-2xl bg-[#7C71FD] text-white font-semibold px-6 py-4 rounded-full'
        >
          Home
        </Link>
      )}
      {pathname !== '/favs' && (
        <Link
          to='/favs'
          className='text-2xl bg-[#7C71FD] text-white font-semibold px-6 py-4 rounded-full'
        >
          0 Books Favs
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
