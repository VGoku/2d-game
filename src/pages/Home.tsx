// import React from "react";

// const Home: React.FC = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
//       <h1 className="text-3xl">Welcome to the Game</h1>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold gothic-text">Welcome to the Game</h1>
      <p className="text-lg mt-4 max-w-md text-center">
        Enter a world of darkness, mystery, and power. Choose your path as a Vampire, Werewolf, or Hunter. Will you survive the night?
      </p>
      <div className="mt-6 flex gap-4">
        <button 
          onClick={() => navigate("/login")} 
          className="bg-red-600 px-4 py-2 rounded text-lg"
        >
          Login
        </button>
        <button 
          onClick={() => navigate("/register")} 
          className="bg-blue-600 px-4 py-2 rounded text-lg"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Home;
