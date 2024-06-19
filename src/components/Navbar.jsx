import { useState } from "react";
import 'bootstrap';
import PropTypes from 'prop-types';
import { Link,BrowserRouter as Router } from "react-router-dom";

function Navbar(props) {
  return (
    <>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid ">
    <Link to="/" className="navbar-brand">{props.title}</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Contact</Link>
        </li>
        {/*<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>*/}
      </ul>
      <div className="form-check form-switch mx-2">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleState}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={props.state} >Enable {props.mode==='dark'?'Light':'Dark'} Mode</label>
      </div>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {/*use btn-outline to get outline also btn-success is for green and btn-primary for blue */}
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Set Title',
  about: 'About',
  mode: 'light'
};

export default Navbar;
