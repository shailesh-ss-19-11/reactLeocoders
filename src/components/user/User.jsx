import { useEffect, useState } from "react";
import { deleteuser, getUserList } from "./Server";
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai'
import AddEditUser from "./AddEditUser";
const User = () => {
    const [userData, setuserData] = useState([]);
    const [showModal, setshowModal] = useState(false);
    const [user, setuser] = useState({});
    const getUserData = () => {
        getUserList((data) => {
            console.log(data);
            setuserData(data);
        })
    }

    useEffect(() => {
        getUserData();
    }, [])

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


    return (
        <div className="container mt-3">
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
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user["First Name"]}</td>
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
        </div>
    )
}

export default User;