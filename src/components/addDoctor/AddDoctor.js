import React, { useState } from 'react'
import Sidebar from '../dashboard/sidebar/Sidebar'

 const AddDoctor = () => {

     const [doctorInfo, setDoctorInfo] = useState({})
     const [file,setFile] =useState(null)

     const handleBlur = e => {
        const newDrInfo = { ...doctorInfo };
        newDrInfo[e.target.name] = e.target.value;
        setDoctorInfo(newDrInfo);
    }
 
     const handleFileChange =(e)=>{
         const newFile =e.target.files[0]
         setFile(newFile)
     }
       const handleSubmit=(e)=>{
          // e.preventDefault()
        const formData = new FormData()
        //console.log(doctorInfo);
        formData.append('file', file);
        formData.append('name', doctorInfo.name);
        formData.append('email', doctorInfo.email); 
        formData.append('phone', doctorInfo.phone); 

        fetch('https://protected-plains-09672.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
       }
    
     
    return (
        <section className='container-fluid row'>
           
            <Sidebar></Sidebar>
           
            <div className='col-md-10 p-4 pr-5 justify-content-center' style={{position:'absolute',right: 0, backgroundColor: "#F4FDFB"}}>
                 <h1 className='col-md-5'>add doctor page</h1> 
                <form onSubmit={handleSubmit} className='col-md-5'>
                    
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPhone">phone no</label>
                        <input onBlur={handleBlur} type="number" className="form-control" name="phone" placeholder="Enter phone no" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
            </section>
       
    )
}
export default AddDoctor