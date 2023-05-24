import { useEffect, useRef, useState } from "react";
import { deleteuser, getPaginateData, getUserList } from "./Server";
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai'
import AddEditUser from "./AddEditUser";
import './user.scss';
import ReactPaginate from 'react-paginate';
import { MagicSpinner, TraceSpinner } from 'react-spinners-kit'
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import axios from "axios";
import { Checkbox } from "@mui/material";
const User = () => {
    const [userData, setuserData] = useState([]);
    const [showModal, setshowModal] = useState(false);
    const [user, setuser] = useState({});
    const [loading, setloading] = useState(false);
    const [totalCount, settotalCount] = useState(false);
    const [pagelimit, setpagelimit] = useState(5);
    const [page, setpage] = useState(1);
    const [test, settest] = useState("false");
    const myref = useRef(null);
    const getUserData = () => {
        setloading(true);
        getUserList((data) => {
            console.log(data);
            setuserData(data);
            console.log(data.length);
            settotalCount(data.length);
            setloading(false);
            myref.current.scrollIntoView({
                behavior: "smooth",
            });
        })
    }

    useEffect(() => {
        getUserData();
        console.log(myref);
    }, [])

    // useEffect(()=>{
    //     alert("test dependecy")
    //     console.log("xyz")
    // },[test])


    const handleClose = () => {
        setshowModal(false);
        setuser({});
    }

    const deleteUser = (id) => {
        deleteuser(id, (resp) => {
            console.log(resp, "response");
            if (resp.status == 200) {
                getUserData();
            }
        })
    }

    const editUser = (user) => {
        setshowModal(true);
        setuser(user)
    }
    const handlePageChange = (e, pagenumber) => {
        setpage(pagenumber);
        getPaginateData(pagenumber,pagelimit,(response)=>{
            setuserData(response);
        })
    }

    const handleCountChange=(e)=>{
        setpagelimit(e.target.value)
        getPaginateData(page,e.target.value,(response)=>{
            setuserData(response);
        })

    }


    return (
        <div className="container mt-3">

            {loading ?
                <div className="loader">
                    <TraceSpinner size={150} color="#686769" loading={loading} />
                </div> :
                <div>
                    <button className="btn btn-primary" onClick={() => setshowModal(true)}>Add</button>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((user, index) => (
                                    <tr key={index}>
                                        <th scope="row">{Checkbox}</th>
                                        <td><Link to={"users/" + user.id}> {user["First Name"]}</Link></td>
                                        <td>{user["Last Name"]}</td>
                                        <td>{user.Age}</td>
                                        <td>{user.Address}</td>
                                        <td><button className="btn btn-secondary" onClick={() => { editUser(user) }}><AiTwotoneEdit /></button></td>
                                        <td><button className="btn btn-danger" onClick={() => deleteUser(user.id)}><AiFillDelete /></button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {showModal ? <AddEditUser user={user} getUserData={getUserData} show={showModal} handleClose={handleClose} /> : ""}
                    <span ref={myref}></span>
                    {/* <button onClick={()=>settest("true")}>btn test</button> */}
                </div>
            }
            <div className="d-flex " style={{justifyContent:"space-between"}}>
                <Pagination defaultPage={page} count={totalCount/5} onChange={handlePageChange} />
                <div>
                    <select name="" id="" onChange={handleCountChange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default User;