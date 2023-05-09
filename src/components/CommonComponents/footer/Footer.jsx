import React, { useState } from 'react'
import './footer.scss'
export default function Footer() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [otp,setotp] = useState("");


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(username)
    console.log(password)
    console.log(otp)
  }

  const handleOTP = (event)=>{
    console.log(event);
    setotp(event.target.value)
  }
  return (
    <div className='footer'>
      <h1>this is footer </h1>
      <h1>coming soon</h1>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder='username'/><br/><br/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
        <input type="text" onChange={handleOTP} placeholder='otp'/>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}
