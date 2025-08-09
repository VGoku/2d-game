// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import CharacterCreation from "./pages/CharacterCreation";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import NotFound from "./pages/NotFound"; // Optional: 404 Page

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/character-creation" element={<CharacterCreation />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import PublicProfile from "./pages/PublicProfile";
import CharacterCreation from "./pages/CharacterCreation";
import Hunt from "./pages/Hunt";
import { useAuthStore } from "./store/authStore";
import "./styles/vampire.css";

const TopNavigation = () => {
  return (
    <nav className="top-nav">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};

const GameNavigation = () => {
  const { character } = useAuthStore();
  
  return (
    <nav className="game-nav">
      <div className="nav-section">
        <Link to="/hunt">Hunt</Link>
        <Link to="/arena">Arena</Link>
        <Link to="/coven">Coven</Link>
        <Link to="/market">Market</Link>
        <Link to="/missions">Missions</Link>
      </div>
      <div className="nav-section">
        <Link to="/profile">Profile</Link>
        <Link to={`/character/${character?.name}`}>Public Profile</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </nav>
  );
};

const GameLayout = ({ children }: { children: React.ReactNode }) => {
  const { character } = useAuthStore();
  
  return (
    <div className="game-container">
      <GameNavigation />
      <div className="game-content">
        <aside className="character-sidebar">
          <div className="character-info">
            <img
              src={character?.avatar || "/default-avatar.png"}
              alt="Character Avatar"
              className="character-avatar"
            />
            <h2>{character?.name || "Unnamed"}</h2>
            <p className="character-title">{character?.title || "Untitled"}</p>
            <div className="character-stats">
              <div className="stat">
                <span>Level</span>
                <span>{character?.level || 1}</span>
              </div>
              <div className="stat">
                <span>Experience</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${(character?.experience || 0) / 10}%` }}
                  ></div>
                </div>
              </div>
              <div className="stat">
                <span>Power</span>
                <span>{character?.power || 0}</span>
              </div>
              <div className="stat">
                <span>Gold</span>
                <span>{character?.gold || 0}</span>
              </div>
            </div>
          </div>
        </aside>
        <main className="game-main">{children}</main>
      </div>
    </div>
  );
};

const App = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <div className="app-container">
        <TopNavigation />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/character/:username" element={<PublicProfile />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <GameLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/character/:username" element={<PublicProfile />} />
        <Route path="/character-creation" element={<CharacterCreation />} />
        <Route path="/hunt" element={<Hunt />} />
        <Route path="/arena" element={<div>Arena Page Coming Soon</div>} />
        <Route path="/coven" element={<div>Coven Page Coming Soon</div>} />
        <Route path="/market" element={<div>Market Page Coming Soon</div>} />
        <Route path="/missions" element={<div>Missions Page Coming Soon</div>} />
        <Route path="/inventory" element={<div>Inventory Page Coming Soon</div>} />
        <Route path="/skills" element={<div>Skills Page Coming Soon</div>} />
      </Routes>
    </GameLayout>
  );
};

export default App;
