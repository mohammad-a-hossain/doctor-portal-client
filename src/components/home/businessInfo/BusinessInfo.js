import React from 'react'
import CardInfo from '../cardInfo/CardInfo'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faClock,faPhone,faMapMarker } from '@fortawesome/free-solid-svg-icons'

 const BusinessInfo = () => {
    const infoData =[
        {
            title:'opening hour',
            description:'opening hour description ',
            icon:faClock,
            background:'primary'
        },
        {
         title:'opening hour',
         description:'opening hour description ',
         icon:faPhone,
         background:'dark'
     },
     {
         title:'opening hour',
         description:'opening hour description',
         icon:faMapMarker,
         background:'primary'
     }
     ]
    return (
  
        <section className='container d-flex justify-content-center'>
       
        {infoData.map(info =><CardInfo info={info}></CardInfo>)}
        
        </section>
    )
}
export default BusinessInfo