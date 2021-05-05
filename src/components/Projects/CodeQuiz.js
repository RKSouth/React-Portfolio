import React from 'react';
import QuizHome from '../Images/FinishedProduct.png'
import Code from '../Images/Quiz-Code.png'
import '../Compstyle.css'

function Quiz() {
    return (
        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 className="card-title">History of Coding Quiz</h5>
          <a href="https://github.com/RKSouth/Code_quiz">Github Link</a>
            <span> || </span>
              <a href="https://rksouth.github.io/Code_quiz/">Live Deployment</a>
              <hr/>
        <div id="carouselCodeQuiz" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselCodeQuiz" data-slide-to="0" className="active"></li>
            <li data-target="#carouselCodeQuiz" data-slide-to="1"></li>
            <li data-target="#carouselCodeQuiz" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="card-Image-fluid" src={QuizHome} alt="Home Page"/>
            </div>
            <div className="carousel-item">
              <img className="card-Image-fluid" src={Code} alt="Second slide"/>
            </div>
            <div className="carousel-item">
               <p className="card-text">A way to learn my two favorite subjects, history and coding! 
           This project used local storage, a timer function- 
          I am especially excited about the way the questions shift from one to another using a display:none</p>
            </div>
          </div>
                <a className="carousel-control-prev" href="#carouselCodeQuiz" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselCodeQuiz" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              </div>
              </div>

    )

}

export default Quiz