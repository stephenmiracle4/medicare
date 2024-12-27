import React from 'react'
import Navbar from '../components/Nav'
import HeroSection from '../components/HeroSection'
import ServiceSection from './ServiceSection'
import CardSection from '../components/aboutCard'
import BookApointmet from '../components/bookApointment'
import PriceTable from './PriceTable'
// import FooterSection from './FooterSection'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection />
        <CardSection />
        <ServiceSection/>
        <BookApointmet/>
        <PriceTable/>
        {/* <FooterSection/> */}
    </div>
  )
}

export default Home