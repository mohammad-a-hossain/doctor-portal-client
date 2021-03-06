import React, { useState } from 'react'
import AppointmentForm from '../appointmetnForm/AppointmentForm'

 const BookingCard = ({booking,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    function closeModal(){
      setIsOpen(false);
    }
  
    return (
        <div className='col-md-4 mb-3'>
            <div className='card p-3'>
                <div className='card-body text-center'>
                    <h5 className='card-title text-brand'>{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} space available</p>
                    <button onClick={openModal} className='btn btn-brand text-uppercase'>Book Appointment</button>
                    
                    <AppointmentForm modalIsOpen={modalIsOpen}appointmentSubject={booking.subject} closeModal={closeModal} date={date}></AppointmentForm>
                    
                </div>

            </div>
            
        </div>
    )
}
export default BookingCard