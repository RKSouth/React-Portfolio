import React from 'react';
import './Portstyle.css'
import Burgers from '../Images/EatDaBurger.png'
import Drinks from '../Images/party-drinks.png'

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
                <div className="card">
                <div className="card-Image-fluid">
                  <h5 class="card-title">Drink to the Weather</h5>
                  <hr/>
                    <p class="card-text">An at home bartender app built for my first group project</p>
                <a href="https://github.com/RKSouth/drink-to-the-weather">Github Link</a>
                <span> || </span>
                  <a href="https://rksouth.github.io/drink-to-the-weather/">Live Deployment</a>
                  <img src={Drinks} className="card-Image-fluid" alt="bar app"/>
                  {/* </div> */}
                  {/* text card */}
                  {/* <div className="card"> */}
                
                  {/* </div> */}
                  </div>
                    {/* <div className="card">
                      <img src={Burgers} className="card-Image-top" alt="red background with boxes eat day EatDaBurger"/> */}
                        {/* <div className="card-body">
                          <h5 className="card-title">Eat Da Burgers</h5>
                        </div> */}
                    {/* </div>
                    <div className="card"> */}
               
                 
                  </div>
                </div>
              </div>
          </div>  
        </div>
       </div>
    
    )
}
 export default Portfolio;