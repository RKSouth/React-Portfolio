import React from 'react';
import CarDiv from "../Images/CarbonDiversity.png"
import Code from "../Images/CarbonDiversity-Code.png"
import '../Compstyle.css'

function CarbonDiversity() {
    return (
        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 className="card-title">Carbon + Diversity</h5>
          <a href="https://github.com/RKSouth/CarbonDiversity">Github Link</a>
            <span> || </span>
              <a href="https://rksouth.github.io/CarbonDiversity/">Live Deployment</a>
              <hr/>
        <div id="carouselCarbon" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselCarbon" data-slide-to="0" className="active"></li>
            <li data-target="#carouselCarbon" data-slide-to="1"></li>
            <li data-target="#carouselCarbon" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="card-Image-fluid" src={CarDiv} alt="Home Page"/>
            </div>
            <div className="carousel-item">
              <img className="card-Image-fluid" src={Code} alt="Second slide"/>
            </div>
            <div className="carousel-item">
               <p className="card-text">This project, built in p5.js is meant to be approximate demonstration on how diversity within a forested ecosystem can effect carbon. 
               I built this to be a visual demonstration inspired by research I did while receiving my Bachelor's degree. It uses a gui tool and images I created by drawing and using Adobe Creative Cloud to create a sunset like effect </p>
            </div>
          </div>
                <a className="carousel-control-prev" href="#carouselCarbon" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselCarbon" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              </div>
              </div>
    )

}

export default CarbonDiversity