






import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BsList } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg lg:text-xl header">Crypto 2.0</Link>
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
            <Link to="/leaderboard" className="text-white mb-2">Leaderboard</Link>
            <Link to="/logout" className="text-white">Logout</Link>
          </div>
        </div>
        <div className="lg:flex lg:items-center hidden">
          <div className="lg:flex lg:space-x-4">
            <Link to="/home" className="text-white">Home</Link>
            <Link to="/points" className="text-white">Points</Link>
            <Link to="/wallet" className="text-white">Wallet</Link>
            <Link to="/leaderboard" className="text-white">Leaderboard</Link>
          </div>
          <div className="lg:ml-4">
            <Link to="/logout" className="text-white">Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







