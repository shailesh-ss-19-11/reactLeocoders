import React, { useState } from 'react'
import User from './components/user/User';
import { Table } from 'react-bootstrap'
import Header from './components/CommonComponents/Header';
import Footer from './components/CommonComponents/Footer';
import UserDetails from './components/user/UserDetails';
export default function App() {

  const [userData, setUserData] = useState([
    {
      "firstName": "John",
      "lastName": "Doe",
      "age": 30,
      "email": "john.doe@example.com"
    },
    {
      "firstName": "Jane",
      "lastName": "Smith",
      "age": 25,
      "email": "jane.smith@example.com"
    },
    {
      "firstName": "Bob",
      "lastName": "Johnson",
      "age": 40,
      "email": "bob.johnson@example.com"
    }
  ]);

  const [names, setNames] = useState(["shailesh", "durga", "asmita", "mayuri"])


  // var user = {
  //   name:"shailesh",
  //   age:24,
  //   address:"nagpur"
  // }

  // user ="shailesh"

  return (
    <div>
      <Header/>
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.length > 0 ?
            userData.map((user) => (
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            ))
            : ""}
        </tbody>
      </Table>

      <ul>
        {names.length > 0 ?
          names.map((name) => (<li>{name}</li>)) : ""}
      </ul> */}
      {/* <User/> */}
      {/* <UserDetails/> */}
      <Footer/>
    </div>
  )
}
