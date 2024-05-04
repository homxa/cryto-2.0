

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
  <div className="container mx-auto p-4 md:p-8"> {/* Adjust padding for smaller devices */}
    <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 header">Welcome to Crypto 2.0</h1> {/* Increase font size for larger screens */}
    <p className="text-lg md:text-xl mb-4 md:mb-6 text">Embark on a journey into the future of finance with Crypto 2.0. Earn rewards effortlessly simply by using our app daily, while staying updated on the latest trends in the cryptocurrency market.</p> {/* Adjust font size and margin for smaller devices */}
    <p className="text-lg md:text-xl mb-4 md:mb-6 text">Join our vibrant community today and take the first step towards unlocking financial freedom!</p> {/* Adjust font size and margin for smaller devices */}
    <div className="mb-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text">Stay Up to Date with Latest Airdrop Opportunities</h2> {/* Increase font size for larger screens */}
      <ul className="text-lg md:text-xl"> {/* Adjust font size for smaller devices */}
        <li className="mb-2 text">Discover exclusive airdrop opportunities and earn rewards</li>
        <li className="mb-2 text">Access educational resources to learn about cryptocurrency and Web3 for beginners</li>
      </ul>
    </div>
    <p className="text-lg md:text-xl mb-4 md:mb-6 text">Earn 50 points daily by using our app, and become eligible for our exclusive airdrop! Start accumulating rewards effortlessly and begin your journey towards financial independence today.</p> {/* Adjust font size and margin for smaller devices */}
    <a href='login' className="bg-white hover:bg-gray-200 text-black py-2 px-4 md:py-3 md:px-6 rounded-md font-bold transition-colors duration-300 inline-block">Get Started</a> {/* Adjust padding and make the button inline-block for smaller devices */}
  </div>
</div>



    </>
  );
};

export default Home;


