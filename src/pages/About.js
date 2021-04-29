import React from 'react';
import "../App.css"
// import Me from '../Images/ME.jpg';
function About() {
    return (
    <div className="container col-sm-10 col-md-8 col-lg-8 mr-20 ml-2> ">
        <div className="card-row">
          <div className="card-body">
            <h3 className="card-title">About Me</h3>
           
           
              <div className="image-wrapper float-left pr-3">
                <div className="card-body">
         
                {/* <img src={Me} alt="woman with glasses" className="img-fluid"/> */}
             </div>
             <div className="card-text"  className="single-post-content-wrapper p-3">
             <p> I recently received a Certificate in Full Stack Web Development from UC Berkeley Extension. I have also taken courses in design, photo editing, python and graphql.  I have BS in
              Environmental Science and Chemistry from The Evergreen State College that I received in 2011. I have passion for solving problems using logical steps and critical thinking.
            
            </p>      
            <p>
              Skills:  JavaScript,  node.js, python, mysql, p5.js, Restful Routes 
              </p>
           
            </div>
          </div>
        </div>
        </div>
      </div>
    )

}

export default About