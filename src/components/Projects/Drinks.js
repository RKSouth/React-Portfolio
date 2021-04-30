import React from 'react';
import Drinks from '../Images/party-drinks.png'
import Code from '../Images/Drinks-Code.png'
import '../Compstyle.css'

function Cocktails() {
  return (
    <div className="card  col-md-6 p-3">
    <div className="card-Image">
      <h5 class="card-title">Drink to the Weather</h5>
      <a href="https://github.com/RKSouth/drink-to-the-weather">Github Link</a>
        <span> || </span>
          <a href="https://rksouth.github.io/drink-to-the-weather/">Live Deployment</a>
          <hr/>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="card-Image-fluid" src={Drinks} alt="Home Page"/>
        </div>
        <div class="carousel-item">
          <img class="card-Image-fluid" src={Code} alt="Second slide"/>
        </div>
        <div class="carousel-item">
           <p class="card-text">An at home bartender app built for my first group project. We used the OpenWeather API and the Cocktail Db Api in conjunction with jquerry, bouncer.js and Foundation to build recommend drinks based on the temperature of your area.</p>
        </div>
      </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          </div>
          </div>
         
    )

}

export default Cocktails