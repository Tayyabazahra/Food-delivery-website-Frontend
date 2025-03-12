import React, { useState } from 'react';
import './Signup.css';
import plateImage from '../assets/signin.png'; 
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const[data,setData]=useState({
    username:"",
    email:"",
    password:"",
    address:""
  })
  const navigate=useNavigate()
  const inputHandler=(event)=>{
       const name=event.target.name;
       const value=event.target.value;
       setData(data=>({...data,[name]:value}))
  }
  const register=async(event)=>{
    event.preventDefault();
    const response=await axios.post("https://food-delivery-backend-flax.vercel.app/users/sign-up",data);
    if(response){
       navigate("/sign-in")
    }else{
      alert(response.data.message)
    }
  }
  return (
    <div className="body">
    <div className="signup-container">
      <div className="box">
        <div className="image-container">
          <img src={plateImage} alt="Plate" className="plate-image" />
        </div>
        <div className="form-container">
          <h2>Sign Up</h2>
          <form onSubmit={register}>
            <div className="form-group">
              <label htmlFor="name"></label>
              <input type="name" id="username" name="username" onChange={inputHandler} value={data.username} placeholder='Name' required />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input type="email" id="email" name="email" onChange={inputHandler} value={data.email} placeholder='Email' required />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input type="password" id="password" name="password" onChange={inputHandler} value={data.password} placeholder='Password' required />
            </div>
            <button className='signbutton' type="submit">Sign Up</button>
           <Link to="/sign-in"><p>Already have an account? <span>Login here</span></p></Link>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signup;
