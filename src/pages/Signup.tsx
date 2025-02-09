import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Account created! Please log in.");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold">Signup</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-gray-800 rounded-lg">
        <input type="text" name="username" placeholder="Username" className="p-2 rounded" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" className="p-2 rounded" onChange={handleChange} />
        <button type="submit" className="bg-red-600 p-2 rounded">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
