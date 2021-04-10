import React from 'react'

 const Servicedetails = ({service}) => {
    return (
        <div className='text-center p-4 m-3'>
            <img className='pb-4' src={service.img}></img>
            <h3 className='pb-4'>{service.name}</h3>
            <p className='pb-4 text-justify text-muted'>{service.describe}</p>
            
        </div>
    )
}
export default Servicedetails