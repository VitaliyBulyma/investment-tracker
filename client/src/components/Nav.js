import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg light">
      <p className="navbar-brand" >
        Trackly
      </p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className="navbar-toggler-icon hamburger dev">
          <span className="ham ham1 dev"></span>
          <span className="ham ham2 dev"></span>
          <span className="ham ham3 dev"></span>
        </div>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a href="/" className="nav-link" >
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a href="/" className="nav-link" >
              Calculator <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a href="/news" className="nav-link" >
              News <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>

        <p className="form-inline my-2 my-lg-0 pr-4 ">Welcome back, Vitaliy!</p>
      </div>
    </nav>
  );
};

export default Nav;
