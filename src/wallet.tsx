import {  Navigate } from 'react-router-dom';
import { BsWallet } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { auth, db } from './auth/cofig/config';
import Navbar from './loggin_succ/navbar';
import { collection, doc, onSnapshot, query, updateDoc, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Footer } from './footer/footer';

const Wallet = () => {
// checking if the user is login elase return to login page

  const userId = localStorage.getItem('userId')

  if(!auth.currentUser?.uid && !userId){
    return <Navigate to='/'/>
  }

  

  // const handleWithdrawal = () => {
  //   // Implement withdrawal logic here
  //   // Send the Solana wallet address to the server for processing
  //   console.log('Withdrawal initiated');
  // };

  // Assuming you have access to user data like profile picture and name
  
const [userdetails, setUserdetails] = useState<any>({})
  useEffect(() => {
    const collect = collection(db, "userProfiles");
    const collectTime = query(collect, where("userId", "==", userId));
    const unsubscribe = onSnapshot(collectTime, async (snap) => {
      const posts = snap.docs.map((info) => ({
        docId: info.id,
        ...info.data(),
      }));
      const fill = posts[0]
      setUserdetails(fill);
    });
  
   
  
    // Cleanup function
    return () => {
      unsubscribe();
    };
  }, []);

  const [walletAddressSubmitted, setWalletAddressSubmitted] = useState('');
  const [loading,setloading] = useState(false)
//seting wallet value

const walletValue= (event:any)=>{
  setWalletAddressSubmitted(event.target.value)



}

// Function to handle withdrawal submission
const handleWithdrawal = async() => {
  if(walletAddressSubmitted.trim() === '')return
  // Perform submission logic here
  // Once submitted, set walletAddressSubmitted to true
  setloading(true)
try {
await updateDoc(doc(db,'userProfiles', userdetails.docId),{

walletAdress: walletAddressSubmitted  
})

} catch (error) {
  console.log('faild to update wallet Address',error)
}
 setloading(false) 
 return
};

return (
  <div className="bg-black text-white min-h-screen font-sans">
  <Navbar/>

  <div className="container mx-auto p-8">
    {/* User Profile Section */}
    <div className="flex items-center mb-8">
      <img src={userdetails.profilePic} alt="User Profile" className="w-10 h-10 rounded-full mr-4" />
      <h2 className="text-lg font-bold">{userdetails?.userName}</h2>
    </div>
    <div className="mb-8">
      <div className="bg-gray-800 text-white py-4 px-6 rounded-md mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <BsWallet size={35} className="mr-2"/>
          <h2 className="text-lg font-bold">Current Balance</h2>
          <p className="text-3xl font-bold ml-2 flex items-center"><MdStars size={20} className="mr-1"/>{userdetails?.totalpoints}</p>
        </div>
      </div>
    </div>
    {/* Adjust heading size for smaller screens */}
    <h1 className="text-3xl md:text-4xl font-bold mb-8">Distribution Method</h1>
    {userdetails?.walletAdress? (
      <p className="text-lg">Wallet Address Successfully Linked! Stay tuned for the distribution date. We'll notify you as soon as it's available.</p>
    ) : (
      <div className="flex flex-col gap-4">
        <p className="text-lg">Submit your Solana wallet Address:</p>
        <div className="flex flex-col md:flex-row gap-2">
          <input type="text" className="bg-gray-800 text-white py-2 px-4 rounded-md outline-none" placeholder="Enter Solana Wallet Address"  value={walletAddressSubmitted}
            onChange={walletValue}/>
          <button className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md font-bold transition-colors duration-300" onClick={handleWithdrawal}>{loading? 'processing...': 'submit'}</button>
        </div>
        <p className="text-sm text-gray-400">Note: Please make sure to enter the correct Solana wallet address. Once submitted, the withdrawal cannot be reversed. To be eligible, you have to be using our app, else you might get filtered as bot.</p>
      </div>
    )}
  </div>
  <Footer/>
</div>
);

  
};

export default Wallet;

