import React from 'react';
import AxelImage from "../Images/TheBookNook.png"
import Code from "../Images/AxelTheBird-Code.png"
import '../Compstyle.css'

function Books() {
    return (
        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 className="card-title">The Book Nook</h5>
          <a href="https://github.com/RKSouth/AxelTheBird">Github Link</a>
            <span> || </span>
              <a href="https://rksouth.github.io/AxelTheBird/">Live Deployment</a>
              <hr/>
        <div id="carouselBook" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselBook" data-slide-to="0" className="active"></li>
            <li data-target="#carouselBook" data-slide-to="1"></li>
            <li data-target="#carouselBook" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="card-Image-fluid" src={AxelImage} alt="Home Page"/>
            </div>
            <div className="carousel-item">
              <img className="card-Image-fluid" src={Code} alt="Second slide"/>
            </div>
            <div className="carousel-item">
               <p className="card-text">This project, built in p5.js is the story of Axel the Bird. 
               It used switch and if statements to follow a somewhat randomly generated story that shows images. 
               I drew most of the images myself and got a few from websites that have free images. 
               I wrote the music and recorded it using my electronic piano (keyboard) and the simple recording device on my computer.  </p>
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