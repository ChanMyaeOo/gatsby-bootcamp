import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return(
    <Layout>
      <Head title="Home" />
       <h1>Hello!</h1>
      <h2>I'm Chan Myae Oo, front end web developer living in beautiful town called Mogoke.</h2>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage