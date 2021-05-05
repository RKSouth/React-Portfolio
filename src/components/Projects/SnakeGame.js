import React from 'react';
import GameOver from '../Images/GameOver.png'
import Code from '../Images/Snake-Code.png'
import '../Compstyle.css'

function Snake() {
    return (


        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 class="card-title">Snake Game</h5>
          <a href="https://github.com/RKSouth/Snake-Game">Github Link</a>
            <span> || </span>
              <a href="https://rksouth.github.io/Snake-Game/">Live Deployment</a>
              <hr/>
        <div id="carouselSnake" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselSnake" data-slide-to="0" class="active"></li>
            <li data-target="#carouselSnake" data-slide-to="1"></li>
            <li data-target="#carouselSnake" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="card-Image-fluid" src={GameOver} alt="Home Page"/>
            </div>
            <div class="carousel-item">
              <img class="card-Image-fluid" src={Code} alt="Second slide"/>
            </div>
            <div class="carousel-item">
               <p class="card-text">My take on the snake game, using p5.js. It was built using classes, and mechanics that change based off score.</p>
            </div>
          </div>
                <a class="carousel-control-prev" href="#carouselSnake" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselSnake" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              </div>
              </div>
    )

}

export default Snake