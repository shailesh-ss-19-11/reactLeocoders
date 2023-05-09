import React, { useEffect, useState } from 'react'
import User from './components/user/User';
import { Table } from 'react-bootstrap'
import Header from './components/CommonComponents/header/Header';
import Footer from './components/CommonComponents/footer/Footer';
import UserDetails from './components/user/UserDetails';
import Home from './components/BasicComponents/Home';
import Routing from './Routes/Routes';
export default function App() {
  const [names, setNames] = useState(["shailesh", "durga", "asmita", "mayuri"])
  const [user, setuser] = useState({});


  useEffect(() => {
    const UserDetails = {
      name: "shailesh",
      age: 23,
      address: "nagpur"
    }
    setuser(UserDetails)
  }, [])

  const clickme = ()=>{
    alert("yes someone click me");
  }


  return (
    <div>
      <Header user={user} clickme={clickme}/>
      <Routing />
      <Footer />
    </div>
  )
}
