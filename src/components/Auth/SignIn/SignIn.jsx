// import React from "react";
// export default class SignIn extends React.Component {
//     constructor() {
//         console.log("contructor called")
//         super();
//         this.state = {
//             count: 0,
//             email:"",
//             password:"",
//         }
//     }
//     increment = ()=>{
//         this.setState({count:this.state.count+1})
//     }
//     decrement = ()=>{
//         this.setState({count:this.state.count-1})
//     }

//     handleSubmit = (e)=>{
//         alert("submit");
//     }

//     componentDidMount(){
//         let obj ={};
//         obj.email = "shailesh@email.com"
//         obj.password = "123123123"
//         console.log(obj);
//         this.setState({email:obj.email,password:obj.password});
//     }
//     render() {
//         console.log("render called")
//         console.log(this.state);
//         return (
//             <>
//                 <div className="container">
//                     <form onSubmit={this.handleSubmit}>
//                         <div class="mb-3">
//                             <label for="exampleInputEmail1" class="form-label">Email address</label>
//                             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={this.state.email}/>
//                                 <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//                         </div>
//                         <div class="mb-3">
//                             <label for="exampleInputPassword1" class="form-label">Password</label>
//                             <input type="password" class="form-control" id="exampleInputPassword1" defaultValue={this.state.password}/>
//                         </div>
                    
//                         <button type="submit" class="btn btn-primary">Submit</button>
//                     </form>
//                 </div>

//                 <center>
//                     <button className="btn btn-primary" onClick={this.increment}>+</button>
//                     <h1>{this.state.count}</h1>
//                     <button className="btn btn-danger"onClick={this.decrement}>-</button>
//                 </center>
//             </>
//         )
//     }
// }





