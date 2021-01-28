import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>I create websites and web applications :). My hobby is playing Dota2.</p>
            <Link to="/contact">Go to contact details.</Link>
        </Layout>
    )
}

export default About
