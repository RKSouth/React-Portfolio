import React from 'react';
// import Me from '../Images/ME.jpg';
function About() {
    return (
    <div className="container col-sm-10 col-md-8 col-lg-8 mr-20 ml-2> ">
        <div className="card-row">
          <div className="card-body">
            <h5 className="card-title">About Me</h5>
           
            <p className="card-text"/>
              <div className="image-wrapper float-left pr-3">
                <div className="card-body">
         
                {/* <img src={Me} alt="woman with glasses" className="img-fluid"/> */}
             </div>
             <div className="card-text"  className="single-post-content-wrapper p-3">
             <p> I am currently a student at UC Berkeley's Extension Full Stack Web Developer Certificate Program. I have BS in
              Environmental Science and Chemistry from The Evergreen State College that I received in 2011. I have passion for solving problems using logic and critical thinking. I have never been afraid big projects or big problems and have yet to meet one that I can't find a creative solution for. I like to find the beauty in an algorithm or a formula. I am ready to apply my methodical and reasoned approach to anything put in front of me. 
            
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