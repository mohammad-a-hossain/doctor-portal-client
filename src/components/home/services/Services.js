import React from 'react'
import img1 from '../../../images/001-dental.png'
import img2 from '../../../images/tooth (1).png'
import img3 from '../../../images/tooth.png'
import Servicedetails from '../serviceDetails/Servicedetails'

 const Services = () => {
    const serviceData=[
        {name:'Fluoride Treatment',
        img:img1,
        describe:'services we provide services we provide services we provide services we provide services we provide services we provideservices we provideservices we provideservices we provide'},
        {name:'Cavity Filling',
        img:img2,
        describe:'services we provide services we provide services we provide services we provide services we provide services we provideservices we provideservices we provideservices we provide'},
        {name:'Teath Whitening',
        img:img3,
        describe:'services we provide services we provide services we provide services we provide services we provide services we provideservices we provideservices we provideservices we provide'}

    ]
    return (
       
        <section>
           <div style={{paddingTop:'50px'}}>
               <h5 style={{fontWeight:'700'}}>our services</h5>
               <p style={{fontSize:'60px',color:'#3A4256'}}>services we provide</p>
               <div className='container d-flex' style={{paddingTop:'100px',paddingBottom:'100px'}}>
                 {
                   serviceData.map(service =><Servicedetails service={service}></Servicedetails>)  
                 }
               </div>

           </div>
        </section>
    )
}
export default Services