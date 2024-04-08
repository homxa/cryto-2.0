

import './index.css'
import Home from './initail_pages/home'
import Homes from './loggin_succ/homes'

import Navbar from './loggin_succ/navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './initail_pages/login'
import Signup from './loggin_succ/redirect'
import Points from './loggin_succ/point'
import Wallet from './wallet'
import Leaderboard from './loggin_succ/leaderboard'
import SignUp from './initail_pages/sign_Up'
import { Provider } from 'react-redux'
import {store} from './auth/redux/store'
function App() {

  return (
    <Provider store={store}>

   <Router>
  <Navbar/> 
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/redirect' element={<Signup/>}/>
  <Route path='/home' element={< Homes/>}/>
  <Route path='/points' element={< Points/>}/>
  <Route path='/wallet' element={< Wallet/>}/>
  <Route path='/leaderboard' element={<Leaderboard/>}/>
  <Route path='/signup' element={<SignUp/>}/>







</Routes>


   </Router>
  
    </Provider>
  )
}

export default App
