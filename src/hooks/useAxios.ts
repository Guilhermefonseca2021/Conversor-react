import axios from 'axios';
import { useEffect, useState } from 'react'

const useAxios = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios(url);
        setData(response.data.data);
    }
    fetchData();

  }, [url]);

  return [data]
}

export default useAxios