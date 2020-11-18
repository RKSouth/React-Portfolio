import React from 'react';
import Coding from '../Images/FinishedProduct.png'

function Quiz() {
    return (
        <div className="card">
        <div className="card-Image">
          <h5 class="card-title">History of Coding Quiz</h5>
        
            <p class="card-text">A way to learn my two favorite subjects, history and coding!</p>
        <a href="https://github.com/RKSouth/Code_quiz">Github Link</a>
        <span> || </span>
          <a href="https://rksouth.github.io/Code_quiz/">Live Deployment</a>
          <hr/>
          <img src={Coding} className="card-Image-fluid" alt="bar app"/>
          </div>
          </div>
    )

}

export default Quiz