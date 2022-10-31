import React from 'react'
import { useState } from 'react'

const Contact = () => {

  const [data,setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg:"",
  });

  const formSubmit = (e)=>{
    e.preventDefault();
    alert(`Congratulations ${data.fullname}`);
    setData({
      fullname: "",
      phone: "",
      email: "",
      msg:"",
    });
  }

  const inputEvent = (event)=>{
    const {name,value} = event.target;
    setData((preVal)=>{
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"><strong>Contact Us</strong></h1>
      </div>
      <div className="container contact_div mb-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your full name" name="fullname" value={data.fullname} onChange={inputEvent} required />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number" name="phone" value={data.phone} onChange={inputEvent} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email address" name="email" value={data.email} onChange={inputEvent} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={inputEvent} required/>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
