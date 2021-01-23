import React from 'react'
import { Link } from 'gatsby'

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>I create websites and web applications :). My hobby is playing Dota2.</p>
            <Link to="/contact">Go to contact details.</Link>
        </div>
    )
}

export default About
