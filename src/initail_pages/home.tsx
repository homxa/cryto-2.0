import { Navigate } from "react-router-dom";

const Home = () => {
  // checking if the user is logind to return to Home page

  const userId = localStorage.getItem("userId");

  if (userId) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <div className="bg-black text-white min-h-screen font-sans flex items-center justify-center">
        <div className="container mx-auto p-4 md:p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 header">
            Crypto Sphere
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text">
            Unlock the future of finance with Crypto sphere. Join our community to
            earn rewards, access exclusive airdrops, and stay updated on the
            latest trends in the cryptocurrency market.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text">
            Become an MVP user and earn points for providing valuable feedback!
            Accumulate points to claim exclusive airdrops once our main app
            launches.
          </p>
          <a
            href="/login"
            className="bg-white hover:bg-gray-200 text-black py-3 px-6 rounded-md font-bold text-lg lg:text-xl transition-colors duration-300 inline-block"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
