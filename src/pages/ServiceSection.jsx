import React from 'react'
import Services from '../components/Services'


function ServiceSection() {

  return (
    <div className='flex flex-col items-center w-full p-8'>


        <div className='leading-2'>
        <h1 className='text-3xl '>OUR SERVICE</h1>
        <img src="images/services/underline1.png" alt="" />
        </div>
        <div>
            <Services />
        </div>
    </div>
  )
}

export default ServiceSection