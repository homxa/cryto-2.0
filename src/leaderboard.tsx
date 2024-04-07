import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  // Sample leaderboard data
  const [currentUser, setCurrentUser] = useState({ name: "John Doe", imageUrl: "https://via.placeholder.com/50" });
  const [leaderboardData, setLeaderboardData] = useState([
    { rank: 1, name: " Doe", points: 1000, imageUrl: "https://via.placeholder.com/50" },
    { rank: 2, name: "Jane Smith", points: 850, imageUrl: "https://via.placeholder.com/50" },
    { rank: 3, name: "Alice Johnson", points: 750, imageUrl: "https://via.placeholder.com/50" },
    // Add more leaderboard entries as needed
  ]);

  // Simulate fetching current user data
  useEffect(() => {
    // Fetch current user data from API
    // For demonstration purposes, setting a static user
    // Replace this with actual API call in production
    // setCurrentUser(currentUserFromAPI);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <img src={currentUser.imageUrl} alt={currentUser.name} className="rounded-full w-10 h-10 md:mr-2 mb-2 md:mb-0" />
          <h1 className="text-2xl font-bold">{currentUser.name}</h1>
        </div>
        <h1 className="text-4xl font-bold mb-8">Leaderboard</h1>
        <p className="text-lg mb-4">Check out the top performers on Crypto 2.0:</p>
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
              {leaderboardData.map((user, index) => (
                <tr key={index} className={(index % 2 === 0) ? "bg-gray-700" : "bg-gray-800"}>
                  <td className="px-6 py-4">{user.rank}</td>
                  <td className="px-6 py-4 flex items-center">
                    <img src={user.imageUrl} alt={user.name} className="rounded-full w-10 h-10 md:mr-2 mb-2 md:mb-0" />
                    <span>{user.name}</span>
                  </td>
                  <td className="px-6 py-4">{user.points}</td>
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


