import React from 'react'
import chair from '../../../images/Mask Group 1.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
 const AppointmentHeader = ({handleChangeDate}) => {
  

    
    return (
        <main className='row d-flex align-items-center' style={{height:'800px'}}>
         <div className='col-md-4 offset-md-1'>
             <h1 style={{color:'#3A4256',textAlign:'left'}}>Appointment</h1><br></br>
             <Calendar
                onChange={handleChangeDate}
                value={new Date()}
            />
            
         </div>
         <div className='col-md-6'>
             <img src={chair} className='img-fluid'></img>
         </div>
     </main>
    )
}
export default AppointmentHeader