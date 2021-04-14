import React, { useState } from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navigation from '../../Shared/navber/Navigation'
import AppointmentHeader from '../appointmentHeader/AppointmentHeader'
import BookAppointment from '../Bookappointment/BookAppointment'
 const Appointment = () => {
     const [selectedDate, setSelectedDate] =useState(new Date())
    const handleChangeDate=date=>{
        setSelectedDate(date)    }
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader handleChangeDate={handleChangeDate}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    )
}

export default Appointment