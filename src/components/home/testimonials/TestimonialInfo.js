import React from 'react'
import Testimonial from './Testimonial'

 const TestimonialInfo = ({tinfo}) => {
    return ( 
        <div className='col-md-4 text-center p-4 border m-3'>
            <p style={{padding:'10px',letterSpacing:'1px',textAlign:'justify'}}>{tinfo.message}</p>
            <div className='d-flex'>
                <img src={tinfo.img}></img>
                <div>
                    <h5>{tinfo.name}</h5>
                  <h4>{tinfo.address}</h4>
                </div>
                 
            </div>
          
        </div>
    )
}
export default TestimonialInfo