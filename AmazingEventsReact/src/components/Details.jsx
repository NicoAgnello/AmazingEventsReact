import { useParams } from "react-router-dom";
import "../styles/Details.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Details() {
  const { id } = useParams();

  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios
      .get("https://mindhub-xj03.onrender.com/api/amazing")
      .then((res) => setEvent(res.data.events.find((event) => event._id == id)))
      .catch((err) => console.log(err));
  });

  return (
    <main className="d-flex flex-column justify-content-start align-items-center main-details">
      <h1 className="col-12">Details</h1>
      <div className="row d-flex flex-row justify-content-evenly aling-items-center m-5 gap-2 ">
        <img src={event.image} alt={event.name} className="col-11 col-xl-6 d-flex justify-content-center image-event" />
        <div className="card col-11 col-xl-6 box-detalles">
          <div className="card-body cuerpo-details">
            <h5 className="text-center">{event.name}</h5>
            <p className="card-text text-center">{event.description}</p>
            <ul className="d-flex flex-column gap-3 text-center p-0 lista-details">
              <li className="list-group-item">Catergory: {event.category}</li>
              <li className="list-group-item">Place: {event.place}</li>
              <li className="list-group-item">Capacity: {event.capacity}</li>
              <li className="list-group-item"></li>
              <li className="list-group-item"></li>
            </ul>
            <div className="price-date-details p-2">
              <h6 className="card-title text-center">{event.date}</h6>
              <h6 className="card-title text-center">Price: ${event.pice}</h6>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Details;
