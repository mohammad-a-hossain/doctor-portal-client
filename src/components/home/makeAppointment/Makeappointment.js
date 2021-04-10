import React from 'react'
import doctor from '../../../images/5790-removebg.png'
import './appointment.css'

const Makeappointment = () => {
    return (
        <section className='make-appointment'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 d-none d-md-block'>
                        <img src={doctor} alt='doctor'></img>
                    </div>
                    <div className='col-md-7 text-white py-5 text-xl-start'>
                        <h5 className='text-primary text-uppercase'>appointment</h5>
                        <h1 className='my-4'>Make an Appointment <br></br> today</h1>
                        <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type</p>
                        <button>learn more</button>
                    </div>
                    
                </div>

            </div>
=
        </section>
    )
}
export default Makeappointment