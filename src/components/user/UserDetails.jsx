import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { getuserDetails } from './Server';
import {TraceSpinner } from 'react-spinners-kit'
import './user.scss';
export default function UserDetails(props) {
  let userId = useParams();
  let Navigate = useNavigate();
  userId = userId.id
  console.log(userId)
  const [userDetails, setuserDetails] = useState({});
  const [loader, setloader] = useState(false);
  const getUserDetails = ()=>{
    setloader(true);
    getuserDetails(userId,(response)=>{
      setuserDetails(response);
      setloader(false);
    })
  }

  useEffect(()=>{
    getUserDetails()
  },[])
  return (
    <div className='container'>
      {loader?
        <div className="loader">
          <TraceSpinner size={150} color="#686769" loading={loader} />
        </div>:
        <div>
          <button onClick={()=>Navigate(-1)}>back</button>
          <table>
          <tr>
            <td>First Name</td>
            <td>{userDetails["First Name"]}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{userDetails["Last Name"]}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{userDetails["Address"]}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{userDetails.Age}</td>
          </tr>
                </table>
        </div>}
    </div>
  )
}
