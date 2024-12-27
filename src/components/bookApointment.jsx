<<<<<<< HEAD:src/components/bookApointment.jsx
import React from 'react'
import { FaUser, FaPhone, FaEnvelope, FaCalendar, FaPen } from 'react-icons/fa'
import '../Assets/css/bookApointment.css'


const BookApointment = () => {
  const apointment = [
=======
import React from "react";
import { FaUser, FaPhone, FaEnvelope, FaCalendar, FaPen } from "react-icons/fa";

const BookAppointment = () => {
  const appointmentFields = [
>>>>>>> 8e885d2a62138b2e98fa6d57f0ad1a2650d76ccc:src/components/bookApoinment.jsx
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
<<<<<<< HEAD:src/components/bookApointment.jsx
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
          
=======
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('images/services/background3.png')" }}
    >
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Book Appointment
        </h2>
        <div className="space-y-4">
          {appointmentFields.map((field, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg"
            >
              {field.icon}
              <div className="flex-1">{field.input}</div>
            </div>
          ))}
>>>>>>> 8e885d2a62138b2e98fa6d57f0ad1a2650d76ccc:src/components/bookApoinment.jsx
        </div>
        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Book Appointment
        </button>
      </div>
    </div>
<<<<<<< HEAD:src/components/bookApointment.jsx
    </div>
  )

}


export default BookApointment
=======
  );
};

export default BookAppointment;
>>>>>>> 8e885d2a62138b2e98fa6d57f0ad1a2650d76ccc:src/components/bookApoinment.jsx
