import React from 'react'
import image from '../../../images/Mask Group 3.png'
const FetaureService = () => {
    return (
        <div className=' container d-flex justify-content-center align-items-center text-start'>
        <div className="col-md-6">
        <img className='img-fluid' src={image}></img>
        </div>
        <div className="col-md-6 " style={{marginLeft:'20px'}}>
            <small style={{fontSize:'70px'}}>Exceptional dental care,<br></br> on your terms </small>
            <p >r lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. 
            it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen 
            </p>
            <button style={{padding:'10px',border:'none',backgroundColor:'green',color:'black'}}>Learn More</button>
         </div>
     </div>
    )
}
export default FetaureService