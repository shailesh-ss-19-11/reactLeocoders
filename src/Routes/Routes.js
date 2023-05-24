import {Routes,Route} from 'react-router-dom'
import Home from '../components/BasicComponents/Home';
import About from '../components/BasicComponents/About';
import Contact from '../components/BasicComponents/Contact';
import Service from '../components/BasicComponents/Service';
import User from '../components/user/User';
import SignUp from '../components/Auth/SignUp/SignUp';
import SignIn from "../components/Auth/SignIn/SignIn"
import UserDetails from '../components/user/UserDetails';
 const Routing=()=>{
  return(
    <Routes>
      {/* <Route path='/' Component={Home}/>
      <Route path='/contact' Component={Contact}/>
    <Route path='/service' Component={Service}/> */}
    <Route path='/about' Component={About}/>
      <Route path='/users' Component={User}/>
      <Route path='/users/users/:id' Component={UserDetails}/>
      {/* <Route path='/signup' Component={SignUp}/>
      <Route path='/signin' Component={SignIn}/> */}
    </Routes>
  )
}
export default Routing;