import React from 'react'
import Navbar from '../components/Nav'
import HeroSection from '../components/HeroSection'
import ServiceSection from './ServiceSection'
import CardSection from '../components/aboutCard'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection />
        <CardSection />
        <ServiceSection/>
    </div>
  )
}

export default Home