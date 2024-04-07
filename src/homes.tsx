import { Link } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";

const Home = () => {
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
        <button className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md font-bold transition-colors duration-300">Get Started</button>
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
    </div>
  );
};

export default Home;

