import React from 'react'
import { FaUser, FaPhone, FaEnvelope, FaCalendar, FaPen } from 'react-icons/fa'
import '../Assets/css/bookApointment.css'


const BookApointment = () => {
  const apointment = [
    {
      icon: <FaUser className="text-2xl text-gray-600" />,
      input: <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    },
    {
      icon: <FaPhone className="text-2xl text-gray-600" />,
      input: <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    },
    {
      icon: <FaEnvelope className="text-2xl text-gray-600" />,
      input: <input type="text" placeholder="Email" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    },
    {
      icon: <FaCalendar className="text-2xl text-gray-600" />,
      input: <input type="date" placeholder="Select Date" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    },
    {
      icon: <FaPen className="text-2xl text-gray-600" />,
      input: <input type="text" placeholder="Note" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    },
  ];

  return (
    <div> <h3 className='w-full p-8 text-3xl'>BOOK APOINTMENT</h3>
    
    <div className=" book-apointment "
    >
     
      {apointment.map((apointment, index) => (
        <div key={index}

          style={{
            backgroundImage: <img src="images/services/backgroud3.png" alt="" />
          }}
        >
          {apointment.icon}
          {apointment.input}

        {/* <button className="bg-blue-500 text-white">
            Book Appointment
          </button> */}
      </div>
      ))}
    </div>
    </div>
  );
};

export default BookApointment;


