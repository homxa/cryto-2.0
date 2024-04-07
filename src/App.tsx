

import './index.css'
import Home from './home'
import Homes from './homes'

import Navbar from './navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './login'
import Signup from './signup'
import Points from './point'
import Wallet from './wallet'
import Leaderboard from './leaderboard'
function App() {

  return (
    <>
   <Router>
  <Navbar/> 
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/home' element={< Homes/>}/>
  <Route path='/points' element={< Points/>}/>
  <Route path='/wallet' element={< Wallet/>}/>
  <Route path='/leaderboard' element={<Leaderboard/>}/>






</Routes>


   </Router>
  
    </>
  )
}

export default App
