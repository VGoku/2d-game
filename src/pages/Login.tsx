// // src/pages/Login.tsx
// import React, { useState } from "react";
// import { useAuthStore } from "../store/authStore";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const { login } = useAuthStore();
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     login({ username });
//     navigate("/dashboard");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="p-2 rounded text-black"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="p-2 rounded text-black"
//         />
//         <button type="submit" className="bg-green-600 p-2 rounded">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(formData.username); // Simulate login
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <label className="block mb-2">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="block w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </label>
        <button type="submit" className="bg-red-600 p-2 rounded mt-4 w-full">
          Login
        </button>
      </form>
      <button onClick={() => navigate("/register")} className="mt-4 text-blue-400">
        Don't have an account? Sign up
      </button>
    </div>
  );
};

export default Login;
