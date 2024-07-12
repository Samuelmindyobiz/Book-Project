import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookInfo from "./BookInfo";

const Favs = () => {
  let { favs, setFavs } = useContext(BookContext)

  const favsInfo = favs?.map((fav, index) => {
    return <BookInfo title={fav.title} key={index} author={fav.author} />;
  });
  return <div>
    <div className='px-4 py-6 bg-black sticky top-0'>
      <p className='font-geist text-4xl text-white'>My Favorite Books</p>
    </div>

    {favsInfo}
  </div>;
};

export default Favs;