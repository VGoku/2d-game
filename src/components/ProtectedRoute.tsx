// import { Navigate, Outlet } from "react-router-dom";
// import { useAuthStore } from "../store/authStore";


// const ProtectedRoute = () => {
//   const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;

// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import React from "react";

const ProtectedRoute = () => {
  const { user } = useAuthStore();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
