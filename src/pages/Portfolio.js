import React from 'react';
import "./Portfolio/Portstyle.css"
import Cocktails from '../components/Projects/Drinks'
import Burgers from '../components/Projects/EDB'
import WTF from "../components/Projects/WhatTheFact"
import Quiz from "../components/Projects/CodeQuiz"
import Snake from "../components/Projects/SnakeGame"

function Portfolio() {
    return (
    <div>
      <div className="container col-sm-10 col-md-8 col-lg-8>">
        <div className="card-row">
          <div className="card-body">
            <h5 className="card-title">Portfolio</h5>
            <hr className="my-4"/>
              <div className="row m-1" >
                {/* image card */}
               <Cocktails />
               <Burgers />
              </div>
          
              <div className="row m-1" >
                {/* image card */}
               <Quiz />
               <WTF />
              </div>
               <div className="row m-1" >
                {/* image card */}
               <Quiz />
               <WTF />
              </div>
          </div>  
        </div>
       </div>
    </div>  
      
    )
}
 export default Portfolio;

 