import React from 'react'
import chair from '../../../images/Mask Group 1.png'

 const HeaderMain = () => {
    return (
     <main className='row d-flex align-items-center' style={{height:'800px'}}>
         <div className='col-md-4 offset-md-1'>
             <h1 style={{color:'#3A4256'}}>your new smile <br></br> start here</h1>
             <p className='text-secondary'>your new smile your new smile your new smile your new smile your new smile your new smile your new smileyour new smile </p>
             <button  style={{border:'none',backgroundColor:'lightgreen',color:'white'}}>Get Appointment</button>
         </div>
         <div className='col-md-6'>
             <img src={chair} className='img-fluid'></img>
         </div>
     </main>
    )
}
export default HeaderMain