


import React, { useState } from 'react';
import axios from 'axios'
// import "../index.css"
export default function Register(){
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    // const[value,setValue]=useState({
    //     name:name,
    //     email:email,
    //     password:password
    // })
 const data=e=>{
    console.log(name+''+email+''+password);
    registerserver()
 }
 function registerserver(){
  axios.post('http://localhost:3000/api/register',{
    name:name,
    email:email,
    password:password
  }).then(res=>console.log(res.data))
 }
//  console.log(data);
   return(
    <>
    
        <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>Register</h3>
           
          </div>
        </div>
        <form className="login-form">
        <input type="text" 
        placeholder="Name"
        onChange={e=>setName(e.target.value)}
        />
          <input type="text" placeholder="Email"  onChange={e=>setEmail(e.target.value)}/>
          <input type="password" placeholder="Password"  onChange={e=>setPassword(e.target.value)}/>
         
        </form>
          <button onClick={data} >Register</button>
      </div>
    </div>    
    </>
   )
}