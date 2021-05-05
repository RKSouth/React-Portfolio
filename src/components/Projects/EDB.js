import React from 'react';
import EDB from "../Images/eatdaburgers.png"
import Code from "../Images/EDB-Code.png"
import '../Compstyle.css'

function Burgers() {
    return (
        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 className="card-title">Eat-Da-Burgers</h5>
          <a href="https://github.com/RKSouth/NodeExpressHandlebar">Github Link</a>
            <span> || </span>
              <a href="https://lit-garden-17610.herokuapp.com/">Live Deployment</a>
              <hr/>
        <div id="carouselEDB" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselEDB" data-slide-to="0" className="active"></li>
            <li data-target="#carouselEDB" data-slide-to="1"></li>
            <li data-target="#carouselEDB" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="card-Image-fluid" src={EDB} alt="Home Page"/>
            </div>
            <div className="carousel-item">
              <img className="card-Image-fluid" src={Code} alt="Second slide"/>
            </div>
            <div className="carousel-item">
               <p className="card-text">A simple way to track how you eat burgers but with a complex set of code. 
               Although it may seem simple this project uses express and handlebars to store data in a mysql database. 
               It also utilized JAWSDB and heroku for deployment..</p>
            </div>
          </div>
                <a className="carousel-control-prev" href="#carouselEDB" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselEDB" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              </div>
              </div>
    )

}

export default Burgers