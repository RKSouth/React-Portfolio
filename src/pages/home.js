import React from 'react'
import Contact from './Contact'
import About from './About'
import Portfolio from './Portfolio'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'


function Home() {
    return (
        <div>
<Jumbotron/>
<About/>
<Contact />
<Portfolio/>
< Footer />
        </div>


    )


}


export default Home