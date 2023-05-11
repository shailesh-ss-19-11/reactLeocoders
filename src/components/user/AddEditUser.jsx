import axios from 'axios'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { AddUser, EditUser } from './Server'
import { useEffect } from 'react'

export default function AddEditUser(props) {
    console.log(props);
    const [firstName, setfirstName] = useState(props.user ? props.user["First Name"] : "")
    const [lastname, setlastname] = useState(props.user ? props.user["Last Name"] : "")
    const [age, setage] = useState(props.user ? props.user.Age : "")
    const [address, setaddress] = useState(props.user ? props.user.Address : "")

    const URL = "https://retoolapi.dev/ozK3gN/data/"
    console.log(URL);
    const save = (e) => {
        e.preventDefault();
        let obj = {};
        obj["First Name"] = firstName;
        obj["Last Name"] = lastname;
        obj.Age = age;
        obj.Address = address;

        console.log(obj);
        if (props.user.id) {
            EditUser(props.user.id, obj, (response) => {
                if (response.status == 200) {
                    props.handleClose();
                    props.getUserData();
                }
            })
        } else {
            AddUser(obj, (response) => {
                if (response.status == 201) {
                    props.handleClose();
                    props.getUserData();
                }
            })
        }
    }


    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={save}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={firstName} onChange={(e) => { setfirstName(e.target.value) }} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={lastname} onChange={(e) => { setlastname(e.target.value) }} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Age</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={age} onChange={(e) => { setage(e.target.value) }} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Address</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={address} onChange={(e) => { setaddress(e.target.value) }} />
                        </div>
                        <button type="submit" class="btn btn-primary m-3">Submit</button>
                        <Button variant="secondary" onClick={props.handleClose}>
                            Close
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
