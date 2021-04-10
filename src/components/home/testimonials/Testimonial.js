import React from 'react'
import img1 from '../../../images/Ellipse 1.png'
import img2 from '../../../images/Ellipse 2.png'
import img3 from '../../../images/Ellipse 3.png'
import TestimonialInfo from './TestimonialInfo'

 const Testimonial = () => {
     const testimonials=[
        {name:'Fluoride Treatment',
        address:'california',
        img:img1,
        message:'services we provide services we provide services we provide services we provide services we provide services we provideservices we provideservices we provideservices we provide services we provide services we provide services we provide services we provide services we provide services we '},
        {name:'Cavity Filling',
        address:'new york',
        img:img2,
        message:'services we provide services we provide services we provide services we provide services we provide services we provideservices we provideservices we provideservices we provide services we provide services we provide services we provide services we provide services we provide services we '},
        {name:'Teath Whitening',
        address:'michigan',
        img:img3,
        message:'services we provide services we provide services we provide services we provide services we provide services we provideservices we provideservices we provideservices we provide services we provide services we provide services we provide services we provide services we provide services we '}
     ]
    return (
        <div className="container" style={{padding:'100px 0px'}}>
            <h3 style={{textAlign:'left',paddingBottom:'15px'}}>testimonial</h3>
            <h1 style={{textAlign:'left',paddingBottom:'50px'}}>what's out patient <br></br> say</h1>
            <div className='d-flex'>
                  {
                      testimonials.map(tinfo =><TestimonialInfo tinfo={tinfo}></TestimonialInfo>)
                  }
            </div>
        </div>
     
    )
}

export default Testimonial