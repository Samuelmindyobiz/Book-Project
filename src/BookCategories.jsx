import BookInfo from "./BookInfo";

const BookCategories = ({ name, books }) => {


    const booksInfo = books?.map((book) => {
        return <BookInfo title={book.title} key={book.book_uri} author={book.author} />
    });


    return (
        <div className="category-wrapper">
            <div className="px-2 py-4 bg-black">
                <p className="font-geist text-2xl text-white">{name}</p>
            </div>
            <div className="books-wrapper ">
                {booksInfo}
            </div>
        </div>


    )


};

export default BookCategories;
