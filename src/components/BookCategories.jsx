import BookInfo from './BookInfo';

const BookCategories = ({ name, books }) => {
  const booksInfo = books?.map((book) => {
    return <BookInfo title={book.title} key={book.book_uri} author={book.author} />;
  });

  return (
    <div className='category-wrapper'>
      <div className='px-4 py-6 bg-black sticky top-0'>
        <p className='font-geist text-4xl text-white'>{name}</p>
      </div>
      <div className='books-wrapper'>{booksInfo}</div>
    </div>
  );
};

export default BookCategories;
