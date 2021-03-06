import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Header(props) {
  let [navToRender, setNavToRender] = React.useState();
  let appointmentsURL = `/appointments?client=${window.uid}`;
  React.useEffect(() => {
    setNavToRender(() => {
      return !props.signedIn ? (
        <section
          className="nav-auth"
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
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
        <section
          className="nav-auth"
          style={{ flexDirection: "column", alignItems: "stretch" }}
        >
          <h4 style={{ color: "white", marginTop: "3vh" }}>
            Signed in @ {window.displayName}
          </h4>
          <Link to={appointmentsURL} className="btn-signed-in">
            View Appointments
          </Link>
          <button
            className="btn-signed-in"
            type="button"
            onClick={props.signOut}
          >
            Sign out
          </button>
        </section>
      );
    });
  }, [props.signedIn, props.signOut, appointmentsURL]);

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
