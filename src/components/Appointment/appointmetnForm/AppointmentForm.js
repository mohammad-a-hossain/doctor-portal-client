import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
 
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

 
 const AppointmentForm = ({closeModal,modalIsOpen,appointmentSubject,date}) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        data.service = appointmentSubject;
        data.date = date;
        data.created = new Date();

        fetch('http://localhost:5200/addAppointment',{
             method:'POST',
             headers:{'content-type':'application/json'},
             body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(success =>{
            if(success){
                closeModal()
                alert('appointment success!!')
            }
        })
    }
   
    return (
        
            <div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
          <h2 className='text-brand'>{appointmentSubject}</h2>

           <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
    

           <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
                
               
        </Modal>
        </div>
    )
}
export default AppointmentForm


/* 
 <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
 */




   /* <form onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue="test" ref={register({ required: true })} />
              <input ref={register({ required: true })} />
             {errors.exampleRequired && <span>This field is required</span>}
             <input type="submit" />
           </form> 

           <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                {errors.name && <span className="text-danger">This field is required</span>}

            </div>
            <div className="form-group">
                <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                {errors.phone && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group">
                <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                {errors.email && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group row">
                <div className="col-4">

                    <select className="form-control" name="gender" ref={register({ required: true })} >
                        <option disabled={true} value="Not set">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Not set">Other</option>
                    </select>
                    {errors.gender && <span className="text-danger">This field is required</span>}

                </div>
                <div className="col-4">
                    <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                    {errors.age && <span className="text-danger">This field is required</span>}
                </div>
                <div className="col-4">
                    <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                    {errors.weight && <span className="text-danger">This field is required</span>}
                </div>
            </div>

                <div className="form-group text-right">
                    <button type="submit" className="btn btn-brand">Send</button>
                </div>
            </form>    {/* <form onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue="test" ref={register({ required: true })} />
              <input ref={register({ required: true })} />
             {errors.exampleRequired && <span>This field is required</span>}
             <input type="submit" />
           </form> 

           <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                {errors.name && <span className="text-danger">This field is required</span>}

            </div>
            <div className="form-group">
                <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                {errors.phone && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group">
                <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                {errors.email && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group row">
                <div className="col-4">

                    <select className="form-control" name="gender" ref={register({ required: true })} >
                        <option disabled={true} value="Not set">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Not set">Other</option>
                    </select>
                    {errors.gender && <span className="text-danger">This field is required</span>}

                </div>
                <div className="col-4">
                    <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                    {errors.age && <span className="text-danger">This field is required</span>}
                </div>
                <div className="col-4">
                    <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                    {errors.weight && <span className="text-danger">This field is required</span>}
                </div>
            </div>

                <div className="form-group text-right">
                    <button type="submit" className="btn btn-brand">Send</button>
                </div>
            </form> 

// import React from 'react'
// import ReactDOM from 'react-dom';
// import { useForm } from 'react-hook-form';
// import Modal from 'react-modal';
 
// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };
// Modal.setAppElement('#root')

 
//  const AppointmentForm = ({closeModal,modalIsOpen,appointmentSubject}) => {
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     const onSubmit = data => console.log(data);
   
//     return (
//         <div>
            
//         <Modal
//           isOpen={modalIsOpen}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
 
//           <h2 className='text-brand'>{appointmentSubject}</h2>
//           <form onSubmit={handleSubmit(onSubmit)}>
//              <input defaultValue="test" {...register("example")} />
//              <input {...register("exampleRequired", { required: true })} />
//             {errors.exampleRequired && <span>This field is required</span>}
//             <input type="submit" />
//           </form>
//         </Modal>
//         </div>
//     )
// }
// export default AppointmentForm
*/