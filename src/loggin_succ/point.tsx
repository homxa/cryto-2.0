import { Navigate } from 'react-router-dom';
import { MdStars } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { auth } from '../auth/cofig/config';
import { useEffect, useState } from 'react';

const Points = () => {
// checking if the user is login elase return to login page
const [today, setToday] = useState(1000)
const userId = localStorage.getItem('userId')

if(!auth.currentUser?.uid && !userId){
  return <Navigate to='/'/>
}

useEffect(()=>{
  
},[])


  const todayPoints = 100; // Assuming the user has 100 points
  const referrals = 5; // Assuming the user has referred 5 people
const totalPoints = 1000


  return (
    <div className="bg-black text-white min-h-screen font-sans">
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <div className="bg-gray-800 text-white py-4 px-6 rounded-md mb-4 flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="text-lg font-bold">Today's Points</h2>
            <p className="text-lg md:text-xl lg:text-2xl font-bold ml-2">{todayPoints}/{totalPoints}</p> {/* Adjusted point size for smaller devices */}
          </div>
        </div>
        <div className="bg-gray-800 text-white py-4 px-6 rounded-md mb-4 flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="text-lg font-bold">Referrals</h2>
            <p className="text-lg md:text-xl lg:text-2xl font-bold ml-2">{referrals}</p> {/* Adjusted point size for smaller devices */}
          </div>
        </div>
        <div className="bg-gray-800 text-white py-4 px-6 rounded-md mb-4 flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="text-lg font-bold">Total Points</h2>
            <p className="text-lg md:text-xl lg:text-2xl font-bold ml-2">{totalPoints}</p> {/* Adjusted point size for smaller devices */}
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-8">How You Earned Your Points</h1>
      <ul className="list-disc ml-8 mb-8">
        <li className="mb-2">Watching videos +10 points</li>
        <li className="mb-2">Reading news articles +10 points</li>
        <li className="mb-2">Referring a friend +30 points</li>
        {/* Add more points earning activities */}
      </ul>
    </div>
  </div>
  
  
  
  );
};

export default Points;


