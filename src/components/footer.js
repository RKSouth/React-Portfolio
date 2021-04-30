import React from 'react'
import './Compstyle.css'


function Footer() {
  return (
    <footer>
      <div className="container col-sm-10 col-md-8 col-lg-8">
        <nav className="navbar navbar-expand-md">
          <div className="footer-copyright text-center py-3 text-muted">
            © 2021 Copyright:
          <a href="https://choosealicense.com/licenses/mit/">MIT licenses</a>
         
            <p>Go to Portfolio <a
              href="https://github.com/RKSouth/React-Portfolio"
              target="_blank"
              rel="noreferrer"
            >Github</a> 
            </p>

          </div>

        </nav>
      </div>

    </footer >
  )


}

export default Footer;