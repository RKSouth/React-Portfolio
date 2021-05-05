import React from 'react';
import "./Portstyle.css"
import Cocktails from '../../components/Projects/Drinks'
import Clicker from '../../components/Projects/Clicker-Game'
import Burgers from '../../components/Projects/EDB'
import WTF from "../../components/Projects/WhatTheFact"
import Quiz from "../../components/Projects/CodeQuiz"
import Snake from "../../components/Projects/SnakeGame"

function Portfolio() {
    return (
    <div className="main" id ="Portfolio">
      <div className="container>">
        <div className="card-row">
          <div className="card-body">
            <h5 className="card-title">Portfolio</h5>
            <hr className="my-4"/>
              <div className="row" >
                {/* image card */}
               <Cocktails />
               <Burgers />
              </div>
          
              <div className="row" >
                {/* image card */}
               <Quiz />
               <WTF />
              </div>
               <div className="row" >
                {/* image card */}
               <Snake />
               <Clicker />
              </div>
          </div>  
        </div>
       </div>
    </div>  
      
    )
}
 export default Portfolio;

 