

import './index.css'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Home from './initail_pages/home'
import Login from './initail_pages/login'
import SignUp from './initail_pages/sign_Up'
import Signup from './loggin_succ/redirect'
import { Navbars } from './initail_pages/navbar'
import Homes from './loggin_succ/homes'
import Points from './loggin_succ/point'
import Wallet from './wallet'
import Leaderboard from './loggin_succ/leaderboard'
import Navbar from './loggin_succ/navbar'

function App() {
  const userIds = localStorage.getItem('userId')
  const {userId} = useSelector((state:any)=> state.auth)

  return (

   <Router>
{/* conditionally rendering navbr base on the user status */}
   {userIds || userId ? <Navbar/>:   <Navbars/>}
  
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
  </Routes>

  

   </Router>
  
  )
}

export default App
