import { BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";

export const Footer = ()=>{



  return(
<>

 {/* Join Our Community */}
 <div className="bg-black text-white font-sans">
        <div className="container mx-auto p-8">
          <h2 className="text-2xl font-bold mb-4 header">Join Our Community</h2>
          <div className="flex items-center mb-4">
            <a href="#" className="mr-4">
              <BsTwitterX size={30} />
            </a>
            <a href="#" className="mr-4">
              <BiLogoTelegram size={38} />
            </a>
            <a href="#">
              <BsDiscord size={38} />
            </a>
          </div>
        </div>
      </div>

      {/* Additional Links */}
      <div className="bg-black text-white font-sans">
        <div className="container mx-auto p-8 flex flex-col sm:flex-row justify-between">
          <div>
            <a href="#" className="mr-4 text">Contact Us</a>
            <a href="# text">Terms of Use</a>
          </div>
          <div className="mt-4 sm:mt-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Crypto 2.0. All rights reserved.</p>
          </div>
        </div>
      </div>
</>

  )
}