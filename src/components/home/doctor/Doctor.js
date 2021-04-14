import React, { useEffect, useState } from 'react';
import doctor from '../../../images/5790-removebg.png'
import DoctorInfo from './DoctorInfo'


 const Doctor = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('http://localhost:5200/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    console.log(doctors)
   /* const doctorData=[
        {name:'Dr Rahul datta',
        phoneNo:'+022-2585-5255',
        img:doctor,
       },
       {name:'Dr Rahul datta',
       phoneNo:'+022-2585-5255',
       img:doctor,
      },
      {name:'Dr Rahul datta',
      phoneNo:'+022-2585-5255',
      img:doctor,
     }
        
     ] */
    return (
        <div>
            <h1>Our Doctors</h1>
            <div className='d-flex container flex-wrap'>
              {/*   {doctorData.map(doctor =><DoctorInfo doctor={doctor}></DoctorInfo>)} */}
              {doctors.map(doctor =><DoctorInfo doctor={doctor}></DoctorInfo>)}
            </div>
        </div>
    )
}
export default Doctor