import BookInfo from "./BookInfo";

const BookCategories = ({ name, books }) => {


    const booksInfo = books.map((book) => {


        return <BookInfo />;
    });


    return (
        <>
            <h1>{name}</h1>
            {booksInfo}
        </>


    )


};

export default BookCategories;
