const BookInfo = ({ title, author }) => {
  return (
    <div className='book-wrapper px-4 py-6 flex items-baseline gap-2 border-b-2 border-black hover:bg-red-500 transition-colors cursor-pointer'>
      <p className='title uppercase text-4xl font-bold'> {title}</p>
      <p className='italic'> / {author}</p>
    </div>
  );
};

export default BookInfo;
