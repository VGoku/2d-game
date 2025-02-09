// src/pages/Dashboard.tsx
import React from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold">Welcome, {user?.username}!</h2>
      <button onClick={handleLogout} className="bg-red-600 p-2 rounded mt-4">Logout</button>
    </div>
  );
};

export default Dashboard;
