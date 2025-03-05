import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <div className="text-xl font-bold">
        <Link to="/">GameTitle</Link>
      </div>
      <div className="flex gap-4">
        {!user ? (
          <>
            <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
            <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
            <button onClick={() => { logout(); navigate("/"); }} className="text-red-500">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
