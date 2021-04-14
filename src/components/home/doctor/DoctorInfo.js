import React from 'react'

const DoctorInfo = ({doctor}) => {
    return (
        <div className='col-md-4'>
          {doctor.image ?<img style={{height: '400px'}} src={`data:image/png;base64,${doctor.image.img}`}/>:
          <img style={{height:'400px'}} src={doctor.img}></img>
         }
            <h4>{doctor.name}</h4>
            <h6>{doctor.phone}</h6>
        </div>
    )
}
export default DoctorInfo