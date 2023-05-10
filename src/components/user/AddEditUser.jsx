import axios from 'axios'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { AddUser } from './Server'

export default function AddEditUser(props) {
    const [firstName, setfirstName] = useState("")
    const [lastname, setlastname] = useState("")
    const [age, setage] = useState(0)
    const [address, setaddress] = useState("")

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
        AddUser(obj,(response)=>{
            if(response.status==201){
                props.handleClose();
                props.getUserData();
            }
        })
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
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setfirstName(e.target.value) }} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setlastname(e.target.value) }} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Age</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setage(e.target.value) }} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Address</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setaddress(e.target.value) }} />
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
