






import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BsList } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { loginSuccess } from '../auth/redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../auth/cofig/config';

const Navbar = () => {
  const nav = useNavigate()
  const [showMenu, setShowMenu] = useState(false);
  const dispach = useDispatch()
  const logOut = async()=>{
  
    try {
      dispach(loginSuccess(null))

      localStorage.removeItem('userId')
    
      await signOut(auth)
      nav('/')
      
    } catch (error) {
      console.log('failed to logout', error)
    }
      }
 
 
      const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg lg:text-xl header">Crypto Sphere</Link>
        <div className="lg:hidden">
          {showMenu ? (
            <MdClose onClick={toggleMenu} className="text-white text-2xl cursor-pointer" />
          ) : (
            <BsList onClick={toggleMenu} className="text-white text-2xl cursor-pointer" />
          )}
        </div>
        <div className={`lg:hidden absolute top-16 right-0 bg-black z-10 ${showMenu ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-end p-4">
            <Link to="/home" className="text-white mb-2">Home</Link>
            <Link to="/points" className="text-white mb-2">Points</Link>
            <Link to="/wallet" className="text-white mb-2">Wallet</Link>
            <Link onClick={logOut} to="/leaderboard" className="text-white mb-2">Leaderboard</Link>
            <p  className="text-white">Logout</p>
          </div>
        </div>
        <div className="lg:flex lg:items-center hidden">
          <div className="lg:flex lg:space-x-4">
            <Link to="/home" className="text-white">Home</Link>
            <Link to="/points" className="text-white">Points</Link>
            <Link to="/wallet" className="text-white">Wallet</Link>
            <Link to="/leaderboard" className="text-white">Leaderboard</Link>
          </div>
            <p  onClick={logOut} className="text-white">Logout</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







