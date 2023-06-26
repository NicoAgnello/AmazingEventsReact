import "../styles/Footer.css"
import InstagramImg from "../img/instagram-svgrepo-com.svg"
import FacebookImg from "../img/facebook-svgrepo-com.svg"
import WppImg from "../img/whatsapp-svgrepo-com.svg" 

function Footer (){
    return(
        <footer className="d-flex justify-content-between align-items-center pie-pagina">
          <div className="d-flex align-items-center gap-3">
            <a className="m-2 social" href="#"><img src={InstagramImg} alt="Instagram Logo"/></a>
            <a className="m-2 social" href="#"><img src={FacebookImg} alt=" Facebook Logo"/></a>
            <a className="m-2 social" href="#"><img src={WppImg} alt="Whatsapp Logo"/></a>
          </div>
          <p>Nicolas Agnello</p>
        </footer>
    )
}

export default Footer;