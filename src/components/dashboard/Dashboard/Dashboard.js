import React, { useState ,useEffect, useContext} from 'react'
import AppointmentsByDate from '../appointmetnByDate/AppointmentsByDate'
import Sidebar from '../sidebar/Sidebar'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

    const containerStyle={
        backgroundColor:'rgb(157,185,270)',height:'100%'
    }

 const Dashboard = () => {
    const [selectedDate, setSelectedDate] =useState(new Date())
    const [appointments,setAppointments] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    
    const handleChangeDate = date => {
        setSelectedDate(date);
    }
    useEffect(() => {
        fetch('https://protected-plains-09672.herokuapp.com/appointmentsByDate',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate,email:loggedInUser.email})
         
        })
        .then(res =>res.json())
        .then(data =>setAppointments(data))
    }, [selectedDate])
    
    return (
       <section>
           <div style={containerStyle} className='row container-fluid'>
               <div className='col-md-2'>
                <Sidebar></Sidebar>
               </div>
               <div className='col-md-5'>
               <Calendar
                onChange={handleChangeDate}
                value={new Date()}
            />
               </div>
               <div className='col-md-5'>
                <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
               </div>
           </div>
       </section>
    )
}
export default Dashboard