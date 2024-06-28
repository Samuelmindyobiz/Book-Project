
const BookInfo = ({ title, author }) => {


    return (
        <div className="book-wrapper px-2 py-4 flex items-center gap-2 border-b-2 border-black">
            <p className="title uppercase text-3xl font-bold  "> {title}</p>
            <p className="italic"> / {author}</p>
        </div>



    )
}





export default BookInfo