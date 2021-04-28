import React from 'react';
import GameOver from '../Images/GameOver.png'

function Snake() {
    return (
        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 class="card-title">Snake Game</h5>
        
            <p class="card-text">My take on the snake game, using p5.js</p>
        <a href="https://github.com/RKSouth/Snake-Game">Github Link</a>
        <span> || </span>
          <a href="https://rksouth.github.io/Snake-Game/">Live Deployment</a>
          <hr/>
          <img src={GameOver} className="card-Image-fluid" alt="bar app"/>
          </div>
          </div>
    )

}

export default Snake