import React from 'react'

const DoctorInfo = ({doctor}) => {
    return (
        <div className='col-md-4'>
            <img style={{height:'400px'}} src={doctor.img}></img>
            <h4>{doctor.name}</h4>
            <h6>{doctor.phoneNo}</h6>
        </div>
    )
}
export default DoctorInfo