import React from 'react';
import Facts from '../Images/WhattheFact.png'

function WTF() {
    return (
        <div className="card  col-md-6 p-3">
        <div className="card-Image">
          <h5 class="card-title">What The Fact?</h5>
         
            <p class="card-text">A Fullstack application using sql, node, and express that allows you to sign in, check whether a fact is true or not and save it to your profile.</p>
        <a href="https://github.com/RKSouth/whatTheFact">Github Link</a>
        <span> || </span>
          <a href="https://what-the-fact.herokuapp.com/">Live Deployment</a>
          <hr/>
          <img src={Facts} className="card-Image-fluid" alt="bar app"/>
          </div>
          </div>
    )

}

export default WTF