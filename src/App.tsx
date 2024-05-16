

import './index.css'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'



import Home from './initail_pages/home'
import Login from './initail_pages/login'
import SignUp from './initail_pages/sign_Up'
import Signup from './loggin_succ/redirect'


import Homes from './loggin_succ/homes'
import Points from './loggin_succ/point'
import Wallet from './wallet'
import Leaderboard from './loggin_succ/leaderboard'
import PrivacyPolicyPage from './initail_pages/privacy'


function App() {
 

  return (

   <Router>
{/* conditionally rendering navbr base on the user status */}
   {/* {userIds || userId ? <Navbar/>:   <Navbars/>} */}
  
  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<SignUp/>}/>

  <Route path='/redirect' element={<Signup/>}/>
  <Route path='/redirect' element={<Signup/>}/>
  <Route path='/home' element={< Homes/>}/>
  <Route path='/points' element={< Points/>}/>
  <Route path='/wallet' element={< Wallet/>}/>
  <Route path='/leaderboard' element={<Leaderboard/>}/>
  <Route path='/policy' element={<PrivacyPolicyPage/>}/>

  </Routes>

  

   </Router>
  
  )
}

export default App
