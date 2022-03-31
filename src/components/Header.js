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
          <button type="button">Sign up</button>
          <button type="button">Login</button>
        </div>
        <div className="header-card">
          <h3>Business</h3>
          <button type="button">Sign up</button>
          <button type="button">Login</button>
        </div>
      </nav>
    </header>
  );
}
