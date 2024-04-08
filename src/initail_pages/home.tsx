

import { Navigate } from "react-router-dom";

const Home = () => {
// checking if the user is logind to return to Home page

  const userId = localStorage.getItem('userId')

  if(userId){
    return <Navigate to='/home'/>
  }
  
  return (
    <>
    






    <div className="bg-black text-white min-h-screen font-sans">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 header">Welcome to Crypto 2.0</h1>
        <p className="text-lg mb-4 text">Discover the future of finance with Crypto 2.0. Earn rewards by using our app daily and stay updated with the latest trends in the cryptocurrency market.</p>
        <p className="text-lg mb-4 text">Join our community today and start your journey towards financial freedom!</p>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2 text">Stay Up to Date with Latest Airdrop Opportunities</h2>
          <ul>
            <li className="mb-2 text">Earn rewards through exclusive airdrop opportunities</li>
            <li className="mb-2 text">Learn about cryptocurrency and Web3 for beginners</li>
          </ul>
        </div>
        <p className="text-lg mb-4 text">Earn 50 points daily by using our app to become eligible for our exclusive airdrop!</p>
        <a href='login' className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md font-bold transition-colors duration-300">Get Started</a>
      </div>

     
    </div>
    </>
  );
};

export default Home;


