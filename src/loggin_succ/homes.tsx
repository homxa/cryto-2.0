import {  Navigate, useNavigate } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { auth } from '../auth/cofig/config';
import { signOut } from 'firebase/auth';
import { useDispatch, } from 'react-redux';
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
  dispach(loginSuccess(null))
  localStorage.removeItem('userId')

  await signOut(auth)
  nav('/')
  
} catch (error) {
  console.log('failed to logout', error)
}
  }
  return (
    <div className="bg-black text-white min-h-screen font-sans">
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 header">Welcome back to Crypto Sphere!</h1>
      <p className="text-lg mb-4">Crypto Sphare is your go-to destination for the latest trends and opportunities in the world of cryptocurrency. Stay updated with the most recent market trends, discover exciting airdrop opportunities, and learn about cryptocurrencies whether you're a newbie or an experienced investor.</p>
      <p className="text-lg mb-4">In order to be eligible for our exclusive airdrop, you must have at least 5 referrals.</p>
      <p className="text-lg mb-4 font-semibold">Referral Program:</p>
      <p className="text-lg mb-4">Earn 30 points for every successful referral you make. Encourage your friends and family to join Crypto 2.0 and start earning rewards today!</p>
      <p className="text-lg mb-4 font-semibold">Point Program:</p>
      <p className="text-lg mb-4">Earn 10 points per unique engagement in our app, such as reading news articles or watching videos. To earn points, you must spend at least 1 minute on each page before leaving.</p>
      <p className="text-lg mb-4"> Participate actively in our app to accumulate points and become eligible for our exclusive airdrop!</p>
      <a href='points' className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md font-bold transition-colors duration-300 inline-block">Get Started</a>
    </div>
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">1. How do I earn points?</h3>
        <p className="text-lg mb-4">You can earn points by engaging with our app, such as reading news articles or watching videos. Each unique engagement earns you 10 points.</p>
        <h3 className="text-lg font-semibold mb-2">2. How many referrals do I need for the exclusive airdrop?</h3>
        <p className="text-lg mb-4">You need at least 5 successful referrals to be eligible for our exclusive airdrop.</p>
        <h3 className="text-lg font-semibold mb-2">3. When will the airdrop take place?</h3>
        <p className="text-lg mb-4">The airdrop will take place once a month for eligible participants. Stay tuned for announcements!</p>
        <h3 className="text-lg font-semibold mb-2">4. How can I contact support?</h3>
        <p className="text-lg mb-4">You can contact our support team via email or through our social media channels.</p>
      </div>
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
      <p className="text-sm mt-4">&copy; {new Date().getFullYear()} Crypto 2.0. All rights reserved.</p>
    </div>
    <button onClick={signOUt} className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-bold transition-colors duration-300">Logout</button>
  </div>
  
  
  );
};

export default Homes;

