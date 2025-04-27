import React, { useState } from 'react'
import axios from "axios";
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
    let[name,setName]=useState("");
    let[gender,setGender]=useState("");
    let[age,setAge]=useState(0);
    let[phone,setPhone]=useState("");
    let[address,setAddress]=useState("");

    function clear(){
        setName("");
        setAge(0);
        setGender("");
        setPhone("");
        setAddress("");
    }

    async function save_data(){
        try {
            let phone_RE = /^(?:\+92|0092|0)?3[0-9]{2}[-\s]?[0-9]{7}$/
      let username_RE = /^[A-Za-z_-]{3,20}$/
      if (!name || !gender || !phone || age === 0) {
        toast.error("All Fields Are Empty Please Fill All Required Fields")
      } else if(!phone_RE.test(phone)) {
        toast.error("Phone Number Invalid")
      } else if(!username_RE.test(name)) {
        toast.error("Username Invalid")
      } else if(age < 18) {
        toast.error("Age Must Be Greater Than 18")
      } else {
                await axios.post("http://localhost:3000/owaisassig/reg",{
            name:name,
            age:age,
            gender:gender,
            phone:phone,
            address:address,
        })
        console.log("data save succesfully")
        toast.success("data enter successfully")
        clear()

            }
           

        } catch (error) {
            if (error.status===409) {
                toast.error("Phone No Alredy Exist")
            } else {
                toast.error(error)
                console.log(error)
            }            
        }

    }
  return (
   <>
   <div className='container'>
    <h1>User Register Form</h1>
    <label htmlFor="">Enter your Name</label>
    <input className='form-control my-2' type="text" placeholder='Enter your Name' value={name} onChange={(e)=>setName(e.target.value)} />

    <label htmlFor="">Enter your Age</label>
    <input className='form-control my-2' type="number" placeholder='Enter your Age' value={age} onChange={(e)=>setAge(e.target.value)} />

    <label htmlFor="">Enter your Gender</label>
    <select
            name="gender"
            className="form-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

    <label htmlFor="">Enter your Phone No</label>
    <input className='form-control my-2' type="text" placeholder='Enter your Phone no' value={phone} onChange={(e)=>setPhone(e.target.value)} />

    <label htmlFor="">Enter your Address</label>
    <input className='form-control my-2' type="text" placeholder='Enter your Address' value={address} onChange={(e)=>setAddress(e.target.value)} />

    

<button className='btn btn-primary' onClick={save_data}>Register Now</button>
   </div>
   <ToastContainer/>
   </>
  )
}
