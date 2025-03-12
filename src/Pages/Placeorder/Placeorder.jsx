import React, { useContext, useEffect, useState } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Placeorder = () => {
  const {getTotalCartAmount,token,food_list,cartitems,url} =useContext(StoreContext)
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })
 

  const placeOrder=async(event)=>{
       event.preventDefault();
       let orderItems=[];
       food_list.map((item)=>{
        if(cartitems[item._id]>0){
          let iteminfo=item;
          iteminfo["quantity"]=cartitems[item._id];
          orderItems.push(iteminfo);

        }
       })
       console.log(orderItems)
       let orderData={
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+2,
       }
       let response=await axios.post(url+"/order/placeOrder",orderData,{headers:{token}})
       if(response.data.success){
        const {session_url}=response.data
        window.location.replace(session_url)
       }else{
        alert("Error")
       }
  }
  const onChangeHnadler=(event)=>{
       const name=event.target.name
       const value=event.target.value
       setData(data=>({...data,[name]:value}))
  }
  const navigate= useNavigate()
  useEffect(()=>{
    if(!token){
      navigate("/cart")
    }else if(getTotalCartAmount()===0){
      navigate("/cart")
    }
  },[token])

  return (
    <div>
       <form onSubmit={placeOrder} className='place-order'>
            <div className="place-order-left">
              <p className="title">Delivery Information</p>
              <div className="multi-fields">
                <input required type="text" name='firstName' onChange={onChangeHnadler} value={data.firstName} placeholder='First Name' />
                <input required type="text" name='lastName' onChange={onChangeHnadler} value={data.lastName} placeholder='Last Name' />
              </div>
              <input required type="email" name='email' onChange={onChangeHnadler} value={data.email} placeholder='Email Address' />
              <input required type="text" name='street' onChange={onChangeHnadler} value={data.street} placeholder='Street' />
              <div className="multi-fields">
                <input required type="text" name='city' onChange={onChangeHnadler} value={data.city} placeholder='City' />
                <input required type="text" name='state' onChange={onChangeHnadler} value={data.state} placeholder='State' />
              </div>
              <div className="multi-fields">
                <input required type="text" name='zipcode' onChange={onChangeHnadler} value={data.zipcode} placeholder='Zip Code' />
                <input required type="text" name='country' onChange={onChangeHnadler} value={data.country} placeholder='Country' />
              </div>
              <input required type="text" name='phone' onChange={onChangeHnadler} value={data.phone} placeholder='Phone' />
            </div>
            <div className="place-order-right">
            <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{0}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
              </div>
            </div>
            <button type='submit'>PROCEED TO PAYMENT</button>
          </div>
            </div>
       </form>
    </div>
  )
}

export default Placeorder
