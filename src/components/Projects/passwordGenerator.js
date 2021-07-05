import React from 'react';
import PasswordImage from "../Images/PasswordGenerator.png"
import Code from "../Images/PasswordGenerator-Code.png"
import '../Compstyle.css'

function Password() {
    return (
        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 className="card-title">Password Generator</h5>
          <a href="https://github.com/RKSouth/password_generator">Github Link</a>
            <span> || </span>
              <a href="https://rksouth.github.io/password_generator/">Live Deployment</a>
              <hr/>
        <div id="carouselPassword" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselPassword" data-slide-to="0" className="active"></li>
            <li data-target="#carouselPassword" data-slide-to="1"></li>
            <li data-target="#carouselPassword" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="card-Image-fluid" src={PasswordImage} alt="Home Page"/>
            </div>
            <div className="carousel-item">
              <img className="card-Image-fluid" src={Code} alt="Second slide"/>
            </div>
            <div className="carousel-item">
               <p className="card-text">An app that helps you come up with a very very secure password and allows you to copy it. 
               his was built with HTML, CSS and Javascript. 
               It allows a user to select from a variety of criteria using check boxes and generators a random password with random ordering of all the criteria they selected. </p>
            </div>
          </div>
                <a className="carousel-control-prev" href="#carouselPassword" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselPassword" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              </div>
              </div>
    )

}

export default Password;