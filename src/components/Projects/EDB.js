import React from 'react';
import EDB from "../Images/eatdaburgers.png"
import Code from "../Images/EDB-Code.png"

function Burgers() {
    return (
        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 class="card-title">Eat-Da-Burgers</h5>
          <a href="https://github.com/RKSouth/NodeExpressHandlebar">Github Link</a>
            <span> || </span>
              <a href="https://lit-garden-17610.herokuapp.com/">Live Deployment</a>
              <hr/>
        <div id="carouselEDB" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselEDB" data-slide-to="0" class="active"></li>
            <li data-target="#carouselEDB" data-slide-to="1"></li>
            <li data-target="#carouselEDB" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="card-Image-fluid" src={EDB} alt="Home Page"/>
            </div>
            <div class="carousel-item">
              <img class="card-Image-fluid" src={Code} alt="Second slide"/>
            </div>
            <div class="carousel-item">
               <p class="card-text">A simple way to track how you eat burgers but with a complex set of code. 
               Although it may seem simple this project uses express and handlebars to store data in a mysql database. 
               It also utilized JAWSDB and heroku for deployment..</p>
            </div>
          </div>
                <a class="carousel-control-prev" href="#carouselEDB" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselEDB" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              </div>
              </div>
    )

}

export default Burgers