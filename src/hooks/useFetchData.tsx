import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchData = (url: string) => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);

        setData(response.data);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage('Cant fetch the data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, hasError: !!errorMessage, errorMessage };
};
