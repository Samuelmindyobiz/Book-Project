import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key='
    );

    setData(response);
    console.log(response.data.results);
  };

  useEffect(() => {
    // fetch data
    fetchData();
  }, []);

  return <>Hello there</>;
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
