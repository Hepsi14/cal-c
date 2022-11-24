// import  React, { useState } from 'react';
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import "../index.css"
export default function App(){
  const navigate=useNavigate()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    // const[value,setValue]=useState({
    //     email:email,
    //     password:password
    // })

    function loginserver(){
     axios.post('http://localhost:3000/api/login',{
      email:email,
      password:password
     })
     .then(response=>{
      if(response.data=="There is no Email") return alert('There is no Email')
      if(response.data=='incorrect password')return alert('incorrect password')
      navigate('/Calculator')
     })
    }

    const data=e=>{
        // setValue({...value,[e.target.name]:e.target.value})
        console.log(email+''+password)
        loginserver()
    }
    // console.log(data)
   return(
    <>
        <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>login</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form className="login-form">
        
          <input type="text" placeholder="Email"  onChange={e=>setEmail(e.target.value)}/>
          <input type="password" placeholder="Password"  onChange={e=>setPassword(e.target.value)}/>
         
        </form>
          <button onClick={data}  >Login</button>
      </div>
    </div>    
    </>
   )
}