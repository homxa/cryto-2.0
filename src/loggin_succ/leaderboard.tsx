import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "../auth/cofig/config";
import Navbar from "./navbar";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Leaderboard = () => {
  // checking if the user is login elase return to login page

  const userId = localStorage.getItem("userId");

  if (!auth.currentUser?.uid && !userId) {
    return <Navigate to="/" />;
  }

  // Sample leaderboard data
  const [currentUser] = useState({
    name: "John Doe",
    imageUrl: "https://via.placeholder.com/50",
  });
 

  // Simulate fetching current user data
  const [arrangeTable, setArrangeTable] = useState([]);
const  [currentuserProfile,setCurrentuserProfile] = useState([])
  useEffect(() => {
    const collect = collection(db, "userProfiles");
    const unsubscribe = onSnapshot(collect, async (snap) => {
      const posts = snap.docs.map((info) => ({
        docId: info.id,
        ...info.data(),
      }));

      setCurrentuserProfile(posts.filter((users)=> users.userId === userId))
      // Sort the posts array based on totalpoints
      posts.sort((a, b) => b.totalpoints - a.totalpoints);

      // Update the arrangeTable state with the sorted array
      setArrangeTable(posts);
      console.log(posts);
      return () => unsubscribe();
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <img
            src={currentuserProfile[0]?.profilePic}
            alt={currentUser.name}
            className="rounded-full w-10 h-10 md:mr-2 mb-2 md:mb-0"
          />
          <h1 className="text-2xl font-bold">{currentuserProfile[0]?.userName}</h1>
        </div>
        <h1 className="text-4xl font-bold mb-8">Leaderboard</h1>
        <p className="text-lg mb-4 text">
          Check out the top performers on Crypto sphere:
        </p>
        <div className="bg-gray-800 text-white rounded-md overflow-hidden shadow-lg">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gray-900">
                <th className="px-6 py-3 text-left text-lg">Rank</th>
                <th className="px-6 py-3 text-left text-lg">Name</th>
                <th className="px-6 py-3 text-left text-lg">Points</th>
              </tr>
            </thead>
            <tbody className="overflow-auto max-h-80">
              {arrangeTable?.slice(0, 120).map((user, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}
                >
                  <td className="px-6 py-4">{index}</td>
                  <td className="px-6 py-4 flex items-center space-x-2">
                    <img
                      src={user.profilePic}
                      alt={user.name}
                      className="rounded-full w-10 h-10"
                    />
                    <span className="text-lg">
                      <a href="/leaderboard">{user.userName}</a>
                    </span>
                  </td>
                  <td className="px-6 py-4">{user.totalpoints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
