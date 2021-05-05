import React from 'react';
import Facts from '../Images/WhattheFact.png'
import Code from '../Images/WTF-Code.png'
import '../Compstyle.css'

function WTF() {
    return (

        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 class="card-title">What The Fact?</h5>
          <a href="https://github.com/RKSouth/whatTheFact">Github Link</a>
            <span> || </span>
              <a href="https://what-the-fact.herokuapp.com/">Live Deployment</a>
              <hr/>
        <div id="carouselWTF" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselWTF" data-slide-to="0" class="active"></li>
            <li data-target="#carouselWTF" data-slide-to="1"></li>
            <li data-target="#carouselWTF" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="card-Image-fluid" src={Facts} alt="Home Page"/>
            </div>
            <div class="carousel-item">
              <img class="card-Image-fluid" src={Code} alt="Second slide"/>
            </div>
            <div class="carousel-item">
               <p class="card-text">A Fullstack application using sql, node, and express that allows you to sign in, 
               check whether a fact is true or not and save it to your profile.</p>
            </div>
          </div>
                <a class="carousel-control-prev" href="#carouselWTF" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselWTF" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              </div>
              </div>
    )

}

export default WTF