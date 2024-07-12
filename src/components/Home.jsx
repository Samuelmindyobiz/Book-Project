import { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookCategories from './BookCategories';
import Hero from './Hero';

const Home = () => {
  let { data, loading } = useContext(BookContext);

  if (loading) return <p>Loading...</p>;

  const bookLists = data.map((bookList, index) => {
    return (
      <BookCategories name={bookList.display_name} key={index} books={bookList.books} />
    );
  });

  return (
    <>
      <Hero />
      {bookLists}
    </>
  )
};

export default Home;
