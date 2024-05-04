import {  Navigate } from 'react-router-dom';
import { BsWallet } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { auth } from './auth/cofig/config';

const Wallet = () => {
// checking if the user is login elase return to login page

  const userId = localStorage.getItem('userId')

  if(!auth.currentUser?.uid && !userId){
    return <Navigate to='/'/>
  }

  const balance = 500; // Assuming the user's current balance is $500

  const handleWithdrawal = () => {
    // Implement withdrawal logic here
    // Send the Solana wallet address to the server for processing
    console.log('Withdrawal initiated');
  };

  // Assuming you have access to user data like profile picture and name
  const userProfile = {
    profilePicture: "url_to_user_profile_picture",
    name: "John Doe"
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
   
      <div className="container mx-auto p-8">
        {/* User Profile Section */}
        <div className="flex items-center mb-8">
          <img src={userProfile.profilePicture} alt="User Profile" className="w-10 h-10 rounded-full mr-4" />
          <h2 className="text-lg font-bold">{userProfile.name}</h2>
        </div>
        <div className="mb-8">
          <div className="bg-gray-800 text-white py-4 px-6 rounded-md mb-4 flex justify-between items-center">
            <div className="flex items-center">
              <BsWallet size={35} className="mr-2"/>
              <h2 className="text-lg font-bold">Current Balance</h2>
              <p className="text-3xl font-bold ml-2 flex items-center"><MdStars size={20} className="mr-1"/>{balance}</p>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-8">Distribution Method</h1>
        <div className="flex flex-col gap-4">
          <p className="text-lg">Submit your Solana wallet Address:</p>
          <div className="flex flex-col md:flex-row gap-2">
            <input type="text" className="bg-gray-800 text-white py-2 px-4 rounded-md outline-none" placeholder="Enter Solana Wallet Address" />
            <button className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md font-bold transition-colors duration-300" onClick={handleWithdrawal}>Submit</button>
          </div>
          <p className="text-sm text-gray-400">Note: Please make sure to enter the correct Solana wallet address. Once submitted, the withdrawal cannot be reversed.</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

