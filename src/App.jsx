import { useContext } from 'react';
import BookCategories from './BookCategories.jsx';
import { BookContext } from './context/BookContext.jsx';

function App() {
  let { data, loading } = useContext(BookContext);
  if (loading) return <p>Loading...</p>;

  const bookLists = data.map((bookList, index) => {
    return (
      <BookCategories name={bookList.display_name} key={index} books={bookList.books} />
    );
  });

  return <>{bookLists}</>;
}

export default App;
