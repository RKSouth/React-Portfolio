import React from 'react'
import Navbar from '../components/Navbar'
import About from './About'
import Portfolio from './Portfolio'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'


function Home() {
    return (
        <div>

< Navbar />
<Jumbotron/>
<About/>
<Portfolio/>
< Footer />
        </div>


    )


}


export default Home