import {Routes,Route} from 'react-router-dom'
import Home from '../components/BasicComponents/Home';
import About from '../components/BasicComponents/About';
import Contact from '../components/BasicComponents/Contact';
import Service from '../components/BasicComponents/Service';
import User from '../components/user/User';
import SignUp from '../components/Auth/SignUp/SignUp';

const Routing=()=>{
  return(
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/service' Component={Service}/>
      <Route path='/users' Component={User}/>
      <Route path='/signup' Component={SignUp}/>
    </Routes>
  )
}
export default Routing;