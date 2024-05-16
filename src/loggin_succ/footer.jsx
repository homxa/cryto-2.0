import { BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";

export const Footer = ()=>{

return(
<>

<div className="flex justify-between items-center flex-col md:flex-row">
  <div className="flex items-center mb-4 md:mb-0">
    <BsTwitterX size={30} className="mr-4" />
    <BiLogoTelegram size={38} className="mr-4" />
    <BsDiscord size={38} />
  </div>
  <div className="flex flex-col md:flex-row">
    <a href="#" className="mr-4 mb-2 md:mb-0 md:mr-8">Contact Us</a>
    <a href="#">Terms of Use</a>
  </div>
</div>
<p className="text-sm mt-4">&copy; {new Date().getFullYear()} Crypto 2.0. All rights reserved.</p>

</>
  
)

}