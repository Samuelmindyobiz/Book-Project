import { Link, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookInfo from "./BookInfo";

const Navigation = () => {
  let { pathname } = useLocation();
  let { favs, setFavs } = useContext(BookContext);

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
          {favs.length} Books Favs
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
