 import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './info.css'


 const CardInfo = ({info}) => {
    return (
        <div className={`card col-md-4 m-4 text-white p-4 info-${info.background}`}>
        <div className='d-flex'>
          <div>
          <FontAwesomeIcon className='info-icon' icon={info.icon} />
          </div>
          <div>
         <h6>{info.title}</h6>
         <small>{info.description} </small> 
          </div>
          </div>
    </div>
    )
}
export default CardInfo

//<FontAwesomeIcon icon={faCoffee} /> */