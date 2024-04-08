import { Link } from "react-router-dom";

export const Navbars = () => {

 

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg lg:text-xl header">Crypto 2.0</Link>
       
       
      </div>
    </nav>
  );
};