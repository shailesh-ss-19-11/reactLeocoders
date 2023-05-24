// import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'

// export default function SignUp(props) {
//     const [firstName, setfirstName] = useState("")
//     const [lastname, setlastname] = useState("")
//     const [age, setage] = useState(0)
//     const [address, setaddress] = useState("")

//     const save = ()=>{}
//     return (
//         <div className='container'>
//             <form onSubmit={save}>
//                 <div class="mb-3">
//                     <label for="exampleInputEmail1" class="form-label">First Name</label>
//                     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setfirstName(e.target.value) }} />
//                 </div>
//                 <div class="mb-3">
//                     <label for="exampleInputEmail1" class="form-label">Last Name</label>
//                     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setlastname(e.target.value) }} />
//                 </div>
//                 <div class="mb-3">
//                     <label for="exampleInputEmail1" class="form-label">Age</label>
//                     <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setage(e.target.value) }} />
//                 </div>
//                 <div class="mb-3">
//                     <label for="exampleInputEmail1" class="form-label">Address</label>
//                     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setaddress(e.target.value) }} />
//                 </div>
//                 <button type="submit" class="btn btn-primary m-3">Submit</button>
//                 <Button variant="secondary" onClick={props.handleClose}>
//                     Close
//                 </Button>
//             </form>
//         </div>
//     )
// }
