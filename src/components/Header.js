import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="header-branding">
          <img className="header-logo" src={logo} alt="logo" />
          <p className="header-slogan">
            <i>Empowering Services</i>
          </p>
        </div>
        <div className="header-card">
          <h3>Client</h3>
          <Link to="/auth" className="btn-auth">
            Sign up
          </Link>
          <Link to="/auth" className="btn-auth">
            Login
          </Link>
        </div>
        <div className="header-card">
          <h3>Business</h3>
          <Link to="/auth" className="btn-auth">
            Sign up
          </Link>
          <Link to="/auth" className="btn-auth">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
