import React from 'react'
import About from './About'
import Details from './Details'

const Home = ({services}) => {
  return (
    <div>
      <About />
      <Details services={services} />
    </div>
  )
}

export default Home
