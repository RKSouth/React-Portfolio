import React from 'react';
import BookImage from "../Images/TheBookNook.png"
import Code from "../Images/TheBookNook-Code.png"
import '../Compstyle.css'

function Books() {
    return (
        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 className="card-title">The Book Nook</h5>
          <a href="https://github.com/RKSouth/Book-Search">Github Link</a>
            <span> || </span>
              <a href="https://pure-dawn-66807.herokuapp.com/">Live Deployment</a>
              <hr/>
        <div id="carouselBook" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselBook" data-slide-to="0" className="active"></li>
            <li data-target="#carouselBook" data-slide-to="1"></li>
            <li data-target="#carouselBook" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="card-Image-fluid" src={BookImage} alt="Home Page"/>
            </div>
            <div className="carousel-item">
              <img className="card-Image-fluid" src={Code} alt="Second slide"/>
            </div>
            <div className="carousel-item">
               <p className="card-text">Using React, MongoDB, Express.js and the google books API I built this project that helps you find and save awesome books to read. 
               Every book lover needs a special book nook to keep their books so here it is! This is a CRUD App that writes to a database, deployed using heroku and uses React hooks, props and states. </p>
            </div>
          </div>
                <a className="carousel-control-prev" href="#carouselBook" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselBook" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              </div>
              </div>
    )

}

export default Books;