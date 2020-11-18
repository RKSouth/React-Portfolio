import React from 'react'
import Navbar from "../Navbar/Navbar"
import Me from '../Images/ME.jpg';
import './Jumbostyle.css'

function Jumbotron() {
  return (
  <div>
   <div className="row-3">
    <Navbar />
    </div>
      <div className="row-3"> 
        <div className="jumbotron jumbotron-fluid">
           <div className="container">
             <h1 className="display-4">Rachael Kelm-Southworth</h1>
             <img src={Me} alt="woman with glasses" className="img-fluid"/>
             <p className="lead">Full-Stack Developer</p>
           </div>
      </div>
  </div>
   </div>
  )
}

export default Jumbotron