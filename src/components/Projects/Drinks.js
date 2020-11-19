import React from 'react';
import Drinks from '../Images/party-drinks.png'

function Cocktails() {
    return (
        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 class="card-title">Drink to the Weather</h5>
        
            <p class="card-text">An at home bartender app built for my first group project. We used the OpenWeather API and the Cocktail Db Api in conjunction with jquerry, bouncer.js and Foundation to build recommend drinks based on the temperature of your area.</p>
        <a href="https://github.com/RKSouth/drink-to-the-weather">Github Link</a>
        <span> || </span>
          <a href="https://rksouth.github.io/drink-to-the-weather/">Live Deployment</a>
          <hr/>
          <img src={Drinks} className="card-Image-fluid" alt="bar app"/>
          </div>
          </div>
    )

}

export default Cocktails