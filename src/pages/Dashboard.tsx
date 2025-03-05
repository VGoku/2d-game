// // src/pages/Dashboard.tsx
// import React from "react";
// import { useAuthStore } from "../store/authStore";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const { user, logout } = useAuthStore();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       <h2 className="text-2xl font-bold">Welcome, {user?.username}!</h2>
//       <button onClick={handleLogout} className="bg-red-600 p-2 rounded mt-4">Logout</button>
//     </div>
//   );
// };

// export default Dashboard;


import React from "react";
import { useAuthStore } from "../store/authStore";
import { useCharacterStore } from "../store/characterStore";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuthStore();
  const { character, resetCharacter } = useCharacterStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    resetCharacter(); // Clear character data on logout
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold">Welcome, {user?.username}!</h2>
      {character ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
          <h3 className="text-xl font-bold">Your Character</h3>
          <p><strong>Name:</strong> {character.name}</p>
          <p><strong>Race:</strong> {character.race}</p>
          <p><strong>Strength:</strong> {character.strength}</p>
          <p><strong>Agility:</strong> {character.agility}</p>
          <p><strong>Intelligence:</strong> {character.intelligence}</p>
        </div>
      ) : (
        <button onClick={() => navigate("/character-creation")} className="bg-blue-600 p-2 rounded mt-4">
          Create Character
        </button>
      )}
      <button onClick={handleLogout} className="bg-red-600 p-2 rounded mt-4">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
