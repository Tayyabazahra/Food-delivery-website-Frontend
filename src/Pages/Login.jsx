import React from 'react';
import './Signup.css';
import plateImage from '../assets/signin.png'; 
import { useState,useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from "axios"
import { Link } from 'react-router-dom';
function Login() {
   const [currState,setCurrState]=useState("login")
   const [data,setData]=useState({
    email:"",
    password:""
   })
   const {updateToken}=useContext(StoreContext)
   const onChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData({...data,[name]:value})
   }
   const onLogin=async(event)=>{
        event.preventDefault();
        const response=await axios.post("https://food-delivery-backend-flax.vercel.app/users/login",data);
        if(response){
          updateToken(response.data.token)
          window.location.href="/"
        }
        
   }
  return (
    <div className="body">
    <div className="signup-container">
      <div className="box">
        <div className="form-container">
          <h2>Log In</h2>
          <form onSubmit={onLogin}>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input type="text" id="email" name="email" onChange={onChangeHandler} value={data.email} placeholder='Email' required />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input type="password" id="password" name="password" onChange={onChangeHandler} value={data.password} placeholder='Password' required />
            </div>
            <button className='signbutton' type="submit">Log in</button>
            <Link to="/sign-up"><p>Don't have an account? <span>Signup here</span></p></Link>
          </form>
          </div>
          <div className="image-container">
          <img src={plateImage} alt="Plate" className="plate-image" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
