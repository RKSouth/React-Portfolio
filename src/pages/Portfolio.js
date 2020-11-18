import React from 'react';
// import './Portstyle.css'
import Quiz from '../components/Projects/CodeQuiz'
import Drinks from '../components/Projects/Drinks'
import Burgers from '../Images/EatDaBurger.png'


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
               < Drinks />
              </div>
          </div>  
        </div>
       </div>
    
    )
}
 export default Portfolio;

 