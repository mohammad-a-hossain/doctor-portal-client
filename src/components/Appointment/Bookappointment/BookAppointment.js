import React from 'react'
import BookingCard from '../BookingCard/BookingCard'

 const BookAppointment = ({date}) => {
     const availableData =[
         {
             _id:'5d5ew',
             id:1,
             subject:'Teeth OrthoDontics',
             visitingHour:'08.00 am - 12 pm',
             totalSpace:8
         },
         {
            _id:'5d2ew',
            id:1,
            subject:'Cosmetic Dentistry',
            visitingHour:'08.00 am - 12 pm',
            totalSpace:8
        },
        {
            _id:'5d1ew',
            id:1,
            subject:'Teeth Cleaning',
            visitingHour:'08.00 am - 12 pm',
            totalSpace:8
        },
        {
            _id:'5d4ew',
            id:1,
            subject:'Cavity Protection',
            visitingHour:'08.00 am - 12 pm',
            totalSpace:8
        },
        {
            _id:'5r5ew',
            id:1,
            subject:'Teeth OrthoDontics',
            visitingHour:'08.00 am - 12 pm',
            totalSpace:8
        },  {
            _id:'5j5ew',
            id:1,
            subject:'Teeth OrthoDontics',
            visitingHour:'08.00 am - 12 pm',
            totalSpace:8
        }
     ]
    return (
        <div>
            <h1 className='text-center p-3 mb-3' style={{color:'green'}}>Available appointments on {date.toDateString()}</h1>
            <div className='row' >
                 {
                   availableData.map(booking =><BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
           
        </div>
    )
}
export default BookAppointment