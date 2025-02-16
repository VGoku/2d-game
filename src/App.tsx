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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CharacterCreation from "./pages/CharacterCreation";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // Changed from Register to Signup
import Home from "./pages/Home"; // Import the Home component you already have

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Changed to match the component name */}
        <Route path="/character-creation" element={<CharacterCreation />} />
        <Route path="*" element={<Home />} /> {/* Fallback to Home page instead of NotFound */}
      </Routes>
    </Router>
  );
};

export default App;