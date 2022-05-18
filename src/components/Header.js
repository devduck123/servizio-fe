import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Header(props) {
  console.log("<Header /> : " + props.signedIn);

  let [navToRender, setNavToRender] = React.useState();
  React.useEffect(() => {
    setNavToRender(() => {
      return !props.signedIn ? (
        <section className="nav-auth">
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
        </section>
      ) : (
        <section className="nav-auth">
          <h4 style={{ color: "white", marginTop: "6vh" }}>
            Signed in @ {window.displayName}
          </h4>
          <button type="button" onClick={props.signOut}>
            <small>Sign out</small>
          </button>
        </section>
      );
    });
  }, [props.signedIn, props.signOut]);

  return (
    <header>
      <nav>
        <div className="header-branding">
          <img className="header-logo" src={logo} alt="logo" />
          <p className="header-slogan">
            <i>Empowering Services</i>
          </p>
        </div>
        {navToRender}
      </nav>
    </header>
  );
}
