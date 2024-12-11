import React from 'react'
import Navbar from '../components/Nav'
import HeroSection from '../components/HeroSection'
import ServiceSection from './ServiceSection'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection />
        <ServiceSection/>
    </div>
  )
}

export default Home