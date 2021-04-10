import React from 'react'
import Blogg from '../blogg/Blogg'
import Doctor from '../doctor/Doctor'
import FetaureService from '../featureService/FetaureService'
import Header from '../header/Header'
import Makeappointment from '../makeAppointment/Makeappointment'
import Services from '../services/Services'
import Testimonial from '../testimonials/Testimonial'

 const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FetaureService></FetaureService>
            <Makeappointment></Makeappointment>
            <Testimonial></Testimonial>
            <Blogg></Blogg>
            <Doctor></Doctor>
        </div>
    )
}
export default Home