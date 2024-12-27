import React from 'react'
import '../Assets/PriceTable.css'


const PriceTable = () => {
    const Table = [
        {
            title: 'Basic',
            price: <h1>$120 <span>/month</span></h1>,
            clinic: '50 clinic Hqurs',
            apointment: '2 Apointment',
            doctor: 'apoint a doctor',
        },
        {
            title: 'Basic',
            price: <h1>$120 <span>/month</span></h1>,
            clinic: '50 clinic Hqurs',
            apointment: '2 Apointment',
            doctor: 'apoint a doctor',
        },
        {
            title: 'Basic',
            price: <h1>$120 <span>/month</span></h1>,
            clinic: '50 clinic Hqurs',
            apointment: '2 Apointment',
            doctor: 'apoint a doctor',
        },
        {
            title: 'Basic',
            price: <h1>$120 <span>/month</span></h1>,
            clinic: '50 clinic Hqurs',
            apointment: '2 Apointment',
            doctor: 'apoint a doctor',
        },

    ]
  return (
    <div className='price-table'>
        {Table.map((Table, index) => (
            <div
            key={index}
            >
                {Table.title}
                {Table.price}
                {Table.clinic}
                {Table.apointment}
                {Table.doctor}
            </div>
        ))}
    </div>
  )
}

export default PriceTable