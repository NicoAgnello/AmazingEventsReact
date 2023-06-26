
import '../styles/Header.css'
import AmazingLogo from '../img/LogoAmazingEvents.png'

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
                            <a className="nav-link enlace" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="enlace nav-link " href="#">Upcoming Events</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link enlace" href="#">Past Events</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link enlace" href="#">Contact</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link enlace" href="#">Stats</a>
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
