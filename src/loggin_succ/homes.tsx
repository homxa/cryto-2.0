import { Link, Navigate, useNavigate } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { auth } from '../auth/cofig/config';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../auth/redux/slices/authSlice';

const Homes = () => {
const dispach = useDispatch()
const nav = useNavigate()
// checking if the user is login elase return to login page
const userId = localStorage.getItem('userId')

if(!auth.currentUser?.uid && !userId){
  return <Navigate to='/'/>
}
  const signOUt = async()=>{
try {
  await signOut(auth)
  dispach(loginSuccess(null))
  localStorage.removeItem('userId')
  nav('/')
  
} catch (error) {
  console.log('failed to logout', error)
}
  }
  return (
    <div className="bg-black text-white min-h-screen font-sans">
   
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 header">Welcome back to Crypto 2.0!</h1>
        <p className="text-lg mb-4 text">In order to be eligible for our exclusive airdrop, you must have at least 5 referrals.</p>
        <p className="text-lg mb-4 text">Referral Program:</p>
        <p className="text-lg mb-4 text">Earn 30 points for every successful referral you make. Encourage your friends and family to join Crypto 2.0 and start earning rewards today!</p>
        <p className="text-lg mb-4 text">Point Program:</p>
        <p className="text-lg mb-4 text">Earn 10 points per unique engagement in our app, such as reading news articles or watching videos. To earn points, you must spend at least 1 minute on each page before leaving.</p>
        <p className="text-lg mb-4 text">Participate actively in our app to accumulate points and become eligible for our exclusive airdrop!</p>
        <a href='points' className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md font-bold transition-colors duration-300">Get Started</a>
      </div>
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BsTwitterX size={30} className="mr-4" />
            <BiLogoTelegram size={38} className="mr-4" />
            <BsDiscord size={38} />
          </div>
          <div>
            <a href="#" className="mr-4">Contact Us</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Crypto 2.0. All rights reserved.</p>
      </div>
      <button onClick={signOUt}>logout</button>
    </div>
  );
};

export default Homes;

