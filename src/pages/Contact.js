import React from 'react'

function Contact() {
    return (
        <div className="container col-sm-10 col-md-8 col-lg-8 mr-20 ml-2>" id="Contact">
        <div className="card-row">
          <div className="card-body">
            <h3 className="card-title">Contact</h3>
            <hr className="my-4"/>
            <p>
              Email: rkelmsouthworth@gmail.com
            </p>
          
            <p>Los Angeles, California</p>
            <div className="connect">
            <a href="https://github.com/RKSouth">Github</a>
              <span> || </span>
              <a href="https://www.linkedin.com/in/rachael-kelm-southworth-87a3831b3">Connect on Linkedin</a>
              <span> || </span>
              <a href="https://drive.google.com/file/d/1bJ3-sK_ANqEEAlkjbfabjbW56gM6OOlg/view?usp=sharing" id ="Portfolio">View Resume</a>
            </div>
        </div>
        </div>
      </div>
    )

}

export default Contact