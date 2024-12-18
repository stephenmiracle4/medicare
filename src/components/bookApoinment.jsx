import React from 'react'
import { FaUser, FaPhone, FaEnvelope, FaCalendar, FaPen } from 'react-icons/fa'


const BookApoinment = () => {
  const apointment = [
    {
      icon: <FaUser className="text-4xl text-black" />,
      input: <input type="text" placeholder='Your Name' 
      />
    },
    {
      icon: <FaPhone className="text-4xl text-black" />,
      input: <input type="text" placeholder='Phone Number' 
      />
    },
    {
      icon: <FaEnvelope className="text-4xl text-black"/>,
      input: <input type="text" placeholder='Email' 
      />
    },
    {
      icon: <FaCalendar className="text-4xl text-black" />,
      input: <input type="date" value="16-12-2024" data-date-format="mm-dd-yyyy" placeholder='' />
    },
    {
      icon: <FaPen className="text-4xl text-black" />,
      input: <input type="text" placeholder='Note' />
    }
  ];

  return (
    <div className="flex flex-wrap"
    >
      {apointment.map((apointment, index) => (
        <div key={index}
        
          style={{
            backgroundImage: <img src="images/services/backgroud3.png" alt="" />
          }}
        >
          {apointment.icon}
          {apointment.input}
          
        </div>
        
      ))}
      <button>Book appointment</button>
    </div>
  )

}


export default BookApoinment