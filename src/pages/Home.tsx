// import React from "react";

// const Home: React.FC = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
//       <h1 className="text-3xl">Welcome to the Game</h1>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to Dark Realm</h1>
      <p className="welcome-text">
        Step into a world shrouded in eternal darkness, where vampires, werewolves, 
        and hunters vie for power and survival. Choose your path carefully, for every 
        decision shapes your destiny in this realm of shadows.
      </p>
      <div className="features-grid">
        <div className="feature">
          <h3>Choose Your Path</h3>
          <p>Become a Vampire, Werewolf, or Hunter - each with unique abilities and storylines.</p>
        </div>
        <div className="feature">
          <h3>Build Your Power</h3>
          <p>Train your character, learn new skills, and grow stronger in the darkness.</p>
        </div>
        <div className="feature">
          <h3>Join the Hunt</h3>
          <p>Engage in epic battles, complete missions, and prove your worth.</p>
        </div>
      </div>
      <div className="button-container">
        <Link to="/login" className="gothic-button">
          Enter the Darkness
        </Link>
        <Link to="/register" className="gothic-button primary">
          Begin Your Journey
        </Link>
      </div>
    </div>
  );
};

export default Home;
