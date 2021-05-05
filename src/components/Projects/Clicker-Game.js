import React from 'react';
import Game from '../Images/ClickerGame.png'
import Code from '../Images/ClickGame-Code.png'
import '../Compstyle.css'

function Clicker() {
    return (
        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 className="card-title">Clicky Game</h5>
          <a href="https://github.com/RKSouth/Clicker-Game">Github Link</a>
            <span> || </span>
              <a href="https://rksouth.github.io/Clicker-Game/">Live Deployment</a>
              <hr/>
        <div id="carouselClick" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselClick" data-slide-to="0" className="active"></li>
            <li data-target="#carouselClick" data-slide-to="1"></li>
            <li data-target="#carouselClick" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="card-Image-fluid" src={Game} alt="Home Page"/>
            </div>
            <div className="carousel-item">
              <img className="card-Image-fluid" src={Code} alt="Second slide"/>
            </div>
            <div className="carousel-item">
               <p className="card-text">A memory game that uses react to test your ability to keep track of what you have clicked or not and keeps score</p>
            </div>
          </div>
                <a className="carousel-control-prev" href="#carouselClick" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselClick" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              </div>
              </div>
    )

}

export default Clicker