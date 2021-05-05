import React from 'react';
import Facts from '../Images/WhattheFact.png'
import Code from '../Images/WTF-Code.png'
import '../Compstyle.css'

function WTF() {
    return (

        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 className="card-title">What The Fact?</h5>
          <a href="https://github.com/RKSouth/whatTheFact">Github Link</a>
            <span> || </span>
              <a href="https://what-the-fact.herokuapp.com/">Live Deployment</a>
              <hr/>
        <div id="carouselWTF" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselWTF" data-slide-to="0" className="active"></li>
            <li data-target="#carouselWTF" data-slide-to="1"></li>
            <li data-target="#carouselWTF" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="card-Image-fluid" src={Facts} alt="Home Page"/>
            </div>
            <div className="carousel-item">
              <img className="card-Image-fluid" src={Code} alt="Second slide"/>
            </div>
            <div className="carousel-item">
               <p className="card-text">A Fullstack application using sql, node, and express that allows you to sign in, 
               check whether a fact is true or not and save it to your profile.</p>
            </div>
          </div>
                <a className="carousel-control-prev" href="#carouselWTF" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselWTF" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              </div>
              </div>
    )

}

export default WTF