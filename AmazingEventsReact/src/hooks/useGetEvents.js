import { useEffect, useState } from "react";
import axios from "axios";
const URL = "https://mindhub-xj03.onrender.com/api/amazing";

const useGetEvents = () => {

  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getEvents = async () =>{
      // axios
      //   .get("https://mindhub-xj03.onrender.com/api/amazing")
      //   .then((res) => res.data.events)
      //   .catch((err) => console.log(err));
      try {
        // Con destructuracion
        setIsLoading(true)
        const {data: { events }} = await axios.get(URL);
        setData(events);
        // 
        // Sin Destructuracion
        // const res = await axios.get(URL);
        // return res.data.events
        // 
      } catch (error) {
        console.log(error);
      }  finally{
        setIsLoading(false)
      }
    }
    getEvents()
  }, []);
  return {data, isLoading};
};

export default useGetEvents;