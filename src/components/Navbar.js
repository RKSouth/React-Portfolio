import React from 'react';
import './Compstyle.css';


function Navbar() {


  return (
    <div className="row-3">
      <nav className="navbar fixed-top navbar-light bg-light">
        <div className="navbar-brand p-3 mb-2"></div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav" >
              <li className="nav-item ">
                <a className="nav-link" href="#Home">Home <span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About">About <span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">Contacts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Portfolio">Portfolio</a>
              </li>
            </ul>
          </div>
        </nav>
      </nav>
    </div>
  )



}

export default Navbar;