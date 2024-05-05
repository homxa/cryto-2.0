import { Navigate } from "react-router-dom";

import { auth, db } from "../auth/cofig/config";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const Points = () => {
  // checking if the user is login elase return to login page
  const userId = localStorage.getItem("userId");

  if (!auth.currentUser?.uid && !userId) {
    return <Navigate to="/" />;
  }

  useEffect(() => {}, []);
const [maxDisplayed, setMaxdisplayed] = useState(false)
  const [userdetials, setUserdetails] = useState([]);
  const [howEarned, setHowEarned] = useState([]);
  useEffect(() => {
    const collect = collection(db, "userProfiles");
    const collectTime = query(collect, where("userId", "==", userId));
    const unsubscribe = onSnapshot(collectTime, async (snap) => {
      const posts: any = snap.docs.map((info) => ({
        docId: info.id,
        ...info.data(),
      }));
      setUserdetails(posts);

      console.log(posts);
      //console.log(posts);
    });
    // const idss = setInterval(()=>{
    //   performActionAndEarnPoints()
    // },6000)

    const howErarned = collection(db, "earned");
    
    const unsubscribe1 = onSnapshot(
      query(howErarned, where("userId", "==", userId)),
      async (snap) => {
        const posts: any = snap.docs.map((info) => ({
          docId: info.id,
          ...info.data(),
        }));
        setHowEarned(posts);

        console.log(posts);
        //console.log(posts);
      }
    );

    return () => {
      unsubscribe();
      unsubscribe1();


      // clearInterval(idss)
    };
  }, []);

  const todayPoints = 100; // Assuming the user has 100 points
  const referrals = 5; // Assuming the user has referred 5 people
  const totalPoints = 1000;

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      <div className="container mx-auto p-8">
        <div className="mb-8">
          <div className="bg-gray-800 text-white py-4 px-6 rounded-md mb-4 flex justify-between items-center">
            <div className="flex items-center">
            {userdetials[0] && <h2 className="text-lg font-bold">Today's Points:</h2>}
              <p className="text-lg md:text-xl lg:text-2xl font-bold ml-2">
                {userdetials[0]?.points} {userdetials[0] && '/'}{userdetials[0]?.pointsLimit}
              </p>{" "}
              {/* Adjusted point size for smaller devices */}
            </div>
          </div>
          <div className="bg-gray-800 text-white py-4 px-6 rounded-md mb-4 flex justify-between items-center">
            <div className="flex items-center">
            {userdetials[0] && <h2 className="text-lg font-bold">Referrals:</h2>}
              <p className="text-lg md:text-xl lg:text-2xl font-bold ml-2">
                {userdetials[0]?.referrals}
              </p>{" "}
              {/* Adjusted point size for smaller devices */}
            </div>
          </div>
          <div className="bg-gray-800 text-white py-4 px-6 rounded-md mb-4 flex justify-between items-center">
            <div className="flex items-center">
            {userdetials[0] &&  <h2 className="text-lg font-bold">Total Points:</h2>}
              <p className="text-lg md:text-xl lg:text-2xl font-bold ml-2">
                {userdetials[0]?.totalpoints}
              </p>{" "}
              {/* Adjusted point size for smaller devices */}
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-8">How You Earned Your Points</h1>
        <ul className="list-disc ml-8 mb-8">
        {howEarned?.slice(0, 12).map((how, index) => (
  <li className="mb-2">{how?.earnedBy}</li>
))}


        
          {/* Add more points earning activities */}
        </ul>
      </div>
    </div>
  );
};

export default Points;
