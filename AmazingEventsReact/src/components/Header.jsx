
import '../styles/Header.css'
import AmazingLogo from '../img/LogoAmazingEvents.png'
import { Link } from 'react-router-dom';

function Header (){
    return (
      <>
      <header className="col-12 d-flex justify-content-between bg-dark">
        <img className='amazing-logo' src={AmazingLogo} alt="logo-amazing-events" />
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid justify-content-center">
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center gap-3">
                        <li className="nav-item ">
                            <Link className="nav-link enlace " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="enlace nav-link " to="/events/upcoming">Upcoming Events</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link enlace" to="/events/past">Past Events</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link enlace" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link enlace" to="#">Stats</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  </>
    )
}

export default Header;
