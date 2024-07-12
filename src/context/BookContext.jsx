import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [favs, setFavs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${import.meta.env.VITE_BOOK_API
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

  return (
    <BookContext.Provider value={{ data, setData, favs, setFavs, error, setError, loading, setLoading }}>
      {props.children}
    </BookContext.Provider>
  );
};
