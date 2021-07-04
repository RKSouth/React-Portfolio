import React from 'react';
import "./Pagestyle.css"
import Cocktails from '../components/Projects/Drinks';
import Clicker from '../components/Projects/Clicker-Game';
import Burgers from '../components/Projects/EDB';
import WTF from "../components/Projects/WhatTheFact";
import Quiz from "../components/Projects/CodeQuiz";
import Snake from "../components/Projects/SnakeGame";
import Carbon from "../components/Projects/CarbonDiversity";
import AxelTheBird from "../components/Projects/Axel";
import Books from "../components/Projects/BookNook";
import 

function Portfolio() {
    return (
    <div className="main" id ="Portfolio">
      <div className="container>">
        <div className="card-row">
          <div className="card-body">
            <h2 className="card-title">Portfolio</h2>
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
              <div className="row" >
                {/* image card */}
               <AxelTheBird />
               <Carbon />
              </div>
          </div>  
        </div>
       </div>
    </div>  
      
    )
}
 export default Portfolio;

 