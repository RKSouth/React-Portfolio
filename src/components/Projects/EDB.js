import React from 'react';
import EDB from "../Images/eatdaburgers.png"

function Burgers() {
    return (
        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 class="card-title">Eat-Da-Burgers</h5>
        
            <p class="card-text">A simple way to track how you eat burgers but with a complex set of code. Although it may seem simple this project uses express and handlebars to store data in a mysql database. It also utilized JAWSDB and heroku for deployment.</p>
        <a href="https://github.com/RKSouth/NodeExpressHandlebars">Github Link</a>
        <span> || </span>
          <a href="https://lit-garden-17610.herokuapp.com/">Live Deployment</a>
          <hr/>
          <img src={EDB} className="card-Image-fluid" alt="eat-da-burgers=app"/>
          </div>
          </div>
    )

}

export default Burgers