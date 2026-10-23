import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-logo">
            Agri<span>Mboa</span>
          </p>
          <p className="footer-text">
            Connecting Cameroonian farmers directly with buyers. Crops, cash
            crops, poultry and livestock, straight from the farm.
          </p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/in-season">In season</Link>
          <Link to="/about">How it works</Link>
        </div>

        <div className="footer-col">
          <h4>For farmers</h4>
          <Link to="/signup">Join as a farmer</Link>
          <Link to="/login">Log in</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:tabot.promediasarl@gmail.com">
            tabot.promediasarl@gmail.com
          </a>
          <span>Buea, Cameroon</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} AgriMboa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;