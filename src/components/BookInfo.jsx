import { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { useLocation } from 'react-router-dom';


const BookInfo = ({ title, author }) => {

  let { favs, setFavs } = useContext(BookContext);
  let { pathname } = useLocation();

  const handleFavs = () => {

    const book = {
      title: title,
      author: author,
    }
    let result = favs.filter(fav => {
      return fav.title == title
    })
    result.length == 0 ? setFavs([...favs, book]) : console.log('book exists')
  }

  return (
    <div className='book-wrapper px-4 py-6 flex items-baseline gap-2 border-b-2 border-black hover:bg-red-500 transition-colors cursor-pointer justify-between'>
      <div className="flex justify-center items-center gap-3">
        <p className='title uppercase text-4xl font-bold'> {title}</p>
        <p className='italic'> / {author}</p>
      </div>

      {pathname !== '/favs' && <div>
        <button onClick={handleFavs} className="text-2xl bg-white text-black font-semibold px-6 py-4 rounded-full uppercase">Add</button>
      </div>}

    </div>
  );
};

export default BookInfo;
