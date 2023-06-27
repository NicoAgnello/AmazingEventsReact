import { useEffect, useState } from "react";
import axios from "axios";
const URL = "https://mindhub-xj03.onrender.com/api/amazing";

const useGetEvents = () => {

  const [data, setData] = useState([]);

  const [currentDate, setCurrentDate] = useState([])

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
        const {data: { events, currentDate }} = await axios.get(URL);
        setData(events);
        setCurrentDate(currentDate)
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
  return {data, currentDate, isLoading};
};

export default useGetEvents;