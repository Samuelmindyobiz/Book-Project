import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import BookCategories from './BookCategories.jsx';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${
          import.meta.env.VITE_BOOK_API
        }`
      );

      setData(response.data.results.lists);
    } catch (err) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetch data
    fetchData();
  }, []);

  console.log(data);

  const bookLists = data.map((bookList) => {
    console.log(bookList)

    return <BookCategories name={bookList.display_name} key={bookList.id} steve='12' />;
  });

  return (
    <>
      Hello there
      <BookCategories />
      {bookLists}
    </>
  );
}

export default App;

// class App extends React.Component {
//   constructor(props) {
//     this.bookData =[];
//   }

//   componentDidMount(){
//     // fecth data
//     // setState()
//   }
//   component­Will­Unmount(){}
//   componentDidUpdate()

//    return <></>;

// }

// useEffect(() => {
//   // mounting  + updating
//   // componentDidMount()
//   // fetch data
//   fetchData();

//   return () => {
//     // unmounting component
//     // componentWillUnmount()
//     // cleanup
//   };
// }, []);
