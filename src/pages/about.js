import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const About = () => {
    return (
        <div>
            <Header />
            <h1>About</h1>
            <p>I create websites and web applications :). My hobby is playing Dota2.</p>
            <Link to="/contact">Go to contact details.</Link>
            <Footer />
        </div>
    )
}

export default About
