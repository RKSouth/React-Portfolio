import React from 'react';
import Game from '../Images/ClickerGame.png'

function Clicker() {
    return (
        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 class="card-title">Clicker Game</h5>
         
            <p class="card-text"> A memory game that uses react to test your ability to keep track of what you have clicked or not and keeps score</p>
        <a href="https://github.com/RKSouth/Clicker-Game">Github Link</a>
        <span> || </span>
          <a href="https://rksouth.github.io/Clicker-Game/">Live Deployment</a>
          <hr/>
          <img src={Game} className="card-Image-fluid" alt="bar app"/>
          </div>
          </div>
    )

}

export default Clicker