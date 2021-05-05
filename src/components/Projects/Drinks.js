import React from 'react';
import Drinks from '../Images/party-drinks.png'
import Code from '../Images/Drinks-Code.png'
import '../Compstyle.css'

function Cocktails() {
  return (
    <div className="card  col-md-6 p-3">
    <div className="card-Image">
      <h5 className="card-title">Drink to the Weather</h5>
      <a href="https://github.com/RKSouth/drink-to-the-weather">Github Link</a>
        <span> || </span>
          <a href="https://rksouth.github.io/drink-to-the-weather/">Live Deployment</a>
          <hr/>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="card-Image-fluid" src={Drinks} alt="Home Page"/>
        </div>
        <div className="carousel-item">
          <img className="card-Image-fluid" src={Code} alt="Second slide"/>
        </div>
        <div className="carousel-item">
           <p className="card-text">An at home bartender app built for my first group project. We used the OpenWeather API and the Cocktail Db Api in conjunction with jquerry, bouncer.js and Foundation to build recommend drinks based on the temperature of your area.</p>
        </div>
      </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          </div>
          </div>
         
    )

}

export default Cocktails