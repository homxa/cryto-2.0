import { Link, Navigate } from 'react-router-dom';
import { MdStars } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { auth } from '../auth/cofig/config';

const Points = () => {
// checking if the user is login elase return to login page

const userId = localStorage.getItem('userId')

if(!auth.currentUser?.uid && !userId){
  return <Navigate to='/'/>
}
  const points = 100; // Assuming the user has 100 points
  const referrals = 5; // Assuming the user has referred 5 people

  return (
    <div className="bg-black text-white min-h-screen font-sans">
  
      <div className="container mx-auto p-8">
        <div className="mb-8">
          <div className="bg-gray-800 text-white py-4 px-6 rounded-md mb-4 flex justify-between items-center">
            <div className="flex items-center">
              <MdStars size={35} className="mr-2"/>
              <h2 className="text-lg font-bold">Points Earned</h2>
              <p className="text-3xl font-bold ml-2">{points}</p>
            </div>
          </div>
          <div className="bg-gray-800 text-white py-4 px-6 rounded-md flex justify-between items-center">
            <div className="flex items-center">
              <BiUser size={35} className="mr-2"/>
              <h2 className="text-lg font-bold">Referrals</h2>
              <p className="text-3xl font-bold ml-2">{referrals}</p>
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


