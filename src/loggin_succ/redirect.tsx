import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <nav className="bg-black p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white font-bold text-lg lg:text-xl header">Crypto 2.0</Link>
          </div>
        </div>
      </nav>

      <div className="bg-black text-white min-h-screen font-sans">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-8 header">Join Crypto 2.0</h1>
          <p className="mb-4 text-lg text">To create an account and be eligible for our airdrop, download our app from the Play Store and sign up from there.</p>
          <p className="mb-4 text-lg">Already have an account? <Link to="/login" className="text-blue-500">Log in here.</Link></p>
          <div className="mt-8 flex justify-center">
            <a href="#" className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md font-bold transition-colors duration-300">Download on Play Store</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

