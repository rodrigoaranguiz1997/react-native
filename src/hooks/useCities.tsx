import axios from 'axios'
import { useEffect, useState } from 'react';
const useCities = () => {
  interface Data {
    name: string;
    image: string;
    country: string;
    description: string;
  }
  interface CitiesResponse {
    statusMsg: string;
    data: Data[]
  }

  const [data, setData] = useState<Data[]>([]);

  const getCities = async () => {
    const response = await axios.get<CitiesResponse>("https://mytinerary-server.onrender.com/api/cities")
    setData(response.data.data);
  }
  useEffect(() => {
    getCities()
  }, [])
  return {
    data,
    setData
  }
}

export default useCities
