import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchData = (url: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          setData(response.data);
          setIsLoading(false);
          setHasError(false);
          setErrorMessage('');
          console.log(response);
        } else {
          setHasError(true);
          setErrorMessage('Cant fetch the data');
        }
      } catch (error) {
        setHasError(true);
        setErrorMessage('Cant fetch the data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, hasError, errorMessage };
};
