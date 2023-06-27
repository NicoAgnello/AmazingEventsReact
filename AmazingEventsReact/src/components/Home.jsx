import "../styles/Home.css";
import { Link } from "react-router-dom";
import useGetEvents from "../hooks/useGetEvents";

function Home() {
  const {data, isLoading} = useGetEvents();


  return (
    isLoading ? (
      <span> Loading...</span>
    ) : (
      <div className="body">
      <h1 className="col-12 text-center pt-3">HOME</h1>
      <nav className="navbar bg-withe p-2 nav-busca"></nav>
      <main>
        <div className="container-fluid px-xl-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {data.map(({ _id: id, image, name, description, price }) => (
              <div className="col p-4" key={id}>
                <div className="card carta">
                  <img className="card-image rounded-top" src={image} alt={name} />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text text-center">{description}</p>
                    <div className=" d-flex align-items-center justify-content-evenly">
                      <h6>
                        Price: <span>{price}</span>
                      </h6>
                      <Link className="see-more" to={`/events/${id}`}>
                        See more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
    )
  );
}

export default Home;
