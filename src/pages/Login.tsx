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
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!formData.username || !formData.password) {
        setError("Please fill in all fields");
        return;
      }
      await login(formData.username); // You might want to pass password too when implementing real auth
      navigate("/dashboard");
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gothic-gradient flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h2 className="text-4xl font-bold text-crimson mb-8 text-center font-serif">
          Enter the Darkness
        </h2>
        
        <form onSubmit={handleSubmit} className="bg-vampire-black/80 p-8 rounded-lg shadow-gothic backdrop-blur-sm">
          {error && (
            <div className="mb-4 p-3 bg-blood/20 border border-blood text-crimson rounded">
              {error}
            </div>
          )}
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 font-serif" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gothic-purple/50 border border-gray-700 text-white 
                         focus:ring-2 focus:ring-crimson focus:border-transparent transition-all
                         placeholder-gray-500"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-serif" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gothic-purple/50 border border-gray-700 text-white 
                         focus:ring-2 focus:ring-crimson focus:border-transparent transition-all
                         placeholder-gray-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blood hover:bg-crimson text-white font-bold py-3 px-4 rounded
                       transform transition-all duration-200 hover:scale-105 focus:outline-none
                       focus:ring-2 focus:ring-crimson focus:ring-opacity-50 shadow-gothic"
            >
              Enter
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/register")}
            className="text-gray-400 hover:text-crimson transition-colors duration-200 font-serif"
          >
            New to the Darkness? Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
