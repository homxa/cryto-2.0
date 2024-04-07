import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-black p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white font-bold text-lg lg:text-xl header">Crypto 2.0</Link>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="bg-black text-white min-h-screen font-sans">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-8 header">Login to Your Crypto 2.0 Account</h1>
          <form className="max-w-sm">
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full py-2 px-3 bg-gray-800 text-white rounded-md outline-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-lg mb-2">Password</label>
              <input type="password" id="password" name="password" className="w-full py-2 px-3 bg-gray-800 text-white rounded-md outline-none" />
            </div>
            <button type="submit" className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md font-bold transition-colors duration-300">Login</button>
          </form>
          {/* Sign up link */}
          <div className="mt-4 text-lg">
            Don't have an account? <Link to="/signup" className="text-blue-400">Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
