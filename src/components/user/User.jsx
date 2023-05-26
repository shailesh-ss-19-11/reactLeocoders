import React, { useEffect, useRef, useState } from "react";


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
// import { useHistory } from 'react-router-dom';



function User() {
    // let history = useHistory ();
    const [userData, setuserData] = useState([]);
    const [showModal, setshowModal] = useState(false);
    const [user, setuser] = useState({});
    const [loading, setloading] = useState(false);
    const [totalCount, settotalCount] = useState(false);
    const [pagelimit, setpagelimit] = useState(5);
    const [page, setpage] = useState(1);
    const [test, settest] = useState("false");
    const [rows, setrows] = useState([]);
    const myref = useRef(null);

    const [ischecked, setischecked] = useState([])
    const [statecustomer, setststecustome] = useState([])

    let idsArr = []
    const handlecheckbox = (e) => {
        let findedEle = userData.find((user) => user.id == e.target.value);
        findedEle.ischecked = e.target.checked;
        let newarr = [...userData];
        newarr[newarr.indexOf(findedEle)] = findedEle;
        setuserData(newarr);
        newarr.forEach((ele) => {
            if (ele.ischecked == true) {
                idsArr.push(ele.id);
            }
            console.log(idsArr);
        })
    }

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
        getPaginateData(pagenumber, pagelimit, (response) => {
            setuserData(response);
        })
    }

    const handleCountChange = (e) => {
        setpagelimit(e.target.value)
        getPaginateData(page, e.target.value, (response) => {
            setuserData(response);
        })

    }
    const handledelete = async () => {
        const response = await axios.post("https://retoolapi.dev/ozK3gN/data/", JSON.stringify(ischecked))
        console.log(response)

        // history.push ('./AddEditUser');

    }



    const deletecheck = () => {
        let arrayids = [];
        statecustomer.forEach(d => {
            if (d.select) {
                arrayids.push(d.id);
            }
        });
        //  console.log(d.id)
    }

    let ids = [];
    const handleselectAll = (e) => {
        console.log(e.target.checked);
        let newarr = [...userData];
        console.log(newarr);
        newarr.forEach((element) => {
            element.ischecked = e.target.checked;
            console.log(element);
        })
        console.log(newarr);
        setuserData(newarr);
        newarr.forEach((ele) => {
            if (ele.ischecked == true) {
                ids.push(ele.id);
            }
            console.log(ids);
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
                    &nbsp;&nbsp;

                    <button className="btn btn-danger" onClick={deletecheck} >delete</button>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"><input type="checkbox" value={user.id} checked={user.ischecked} onChange={handleselectAll} /></th>
                                {/* <th scope="col"><input type="checkbox" /></th> */}
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
                                    <tr key={user.index}>

                                        <td> <input type="checkbox" value={user.id} checked={user.ischecked} onChange={(e) => handlecheckbox(e)} />  </td>
                                        <td scope="row"> {index + 1}  </td>
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
            <div className="d-flex " style={{ justifyContent: "space-between" }}>
                <Pagination defaultPage={page} count={totalCount / 5} onChange={handlePageChange} />
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