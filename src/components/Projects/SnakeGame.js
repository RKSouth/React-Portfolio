import React from 'react';
import GameOver from '../Images/GameOver.png'
import Code from '../Images/Snake-Code.png'
import '../Compstyle.css'

function Snake() {
    return (


        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 className="card-title">Snake Game</h5>
          <a href="https://github.com/RKSouth/Snake-Game">Github Link</a>
            <span> || </span>
              <a href="https://rksouth.github.io/Snake-Game/">Live Deployment</a>
              <hr/>
        <div id="carouselSnake" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselSnake" data-slide-to="0" className="active"></li>
            <li data-target="#carouselSnake" data-slide-to="1"></li>
            <li data-target="#carouselSnake" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="card-Image-fluid" src={GameOver} alt="Home Page"/>
            </div>
            <div className="carousel-item">
              <img className="card-Image-fluid" src={Code} alt="Second slide"/>
            </div>
            <div className="carousel-item">
               <p className="card-text">My take on the snake game, using p5.js. It was built using classNamees, and mechanics that change based off score.</p>
            </div>
          </div>
                <a className="carousel-control-prev" href="#carouselSnake" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselSnake" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              </div>
              </div>
    )

}

export default Snake