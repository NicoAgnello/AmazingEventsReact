import { useParams } from "react-router-dom";
import "../styles/Details.css";
import { useEffect, useState } from "react";
import axios from "axios";
import useGetEvents from "../hooks/useGetEvents";

function Details() {
  const { id } = useParams();

  const { data, isLoading } = useGetEvents();

  if (isLoading) return <span>Loading...</span>;
  if (data.length === 0) return <span>Sin datos</span>;

  const event = data.find((event) => event._id === Number(id));
  return (
    <main className="d-flex flex-column justify-content-start align-items-center main-details">
      <h1 className="col-12 text-center text-body-emphasis">Details</h1>
      <div className="row d-flex flex-row justify-content-evenly aling-items-center m-5 gap-2 ">
        <img src={event.image} alt={event.name} className="col-11 col-xl-5 d-flex justify-content-center image-event" />
        <div className="card col-11 col-xl-6 box-detalles">
          <div className="card-body cuerpo-details">
            <h5 className="text-center">{event.name}</h5>
            <p className="card-text text-center">{event.description}</p>
            <ul className="d-flex flex-column gap-3 text-center p-0 lista-details">
              <li className="list-group-item">Catergory: {event.category}</li>
              <li className="list-group-item">Place: {event.place}</li>
              <li className="list-group-item">Capacity: {event.capacity.toLocaleString("es-AR")}</li>
              <li className="list-group-item">
                {event.assistance ? `Assistance: ${event.assistance.toLocaleString("es-AR")}` : `Estimate: ${event.estimate}`}
              </li>
            </ul>
            <div className="price-date-details p-2">
              <h6 className="card-title text-center">{event.date}</h6>
              <h6 className="card-title text-center">Price: ${event.price.toLocaleString("es-AR")}</h6>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Details;
