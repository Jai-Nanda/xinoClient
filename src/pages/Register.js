import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import hey from '../images/auth.png'
const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post("http://localhost:3001/auth/register", {
          username,
          password,
        });
        alert("Registration Completed! Now login.");
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      // <div className="auth-container">
      //   <form onSubmit={handleSubmit}>
      //     <h2>Register</h2>
      //     <div className="form-group">
      //       <label htmlFor="username">Username:</label>
      //       <input
      //         type="text"
      //         id="username"
      //         value={username}
      //         onChange={(event) => setUsername(event.target.value)}
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label htmlFor="password">Password:</label>
      //       <input
      //         type="password"
      //         id="password"
      //         value={password}
      //         onChange={(event) => setPassword(event.target.value)}
      //       />
      //     </div>
      //     <button type="submit">Register</button>
      //   </form>
      // </div>
      <div className="bg-primary-color flex items-center min-h-[90vh] p-4  lg:justify-center">
      <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <img src={hey} alt="hi" className="w-[430px] h-[500p]"/>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Register</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
              <input
               type="text"
                       id="username"
                       value={username}
                      onChange={(event) => setUsername(event.target.value)}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
              </div>
              <input
                 type="password"
                       id="password"
                 value={password}
                        onChange={(event) => setPassword(event.target.value)}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#6333D7] rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log in
              </button>
            </div>
          </form>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don't have an account?</span>
            <a href="/register" className="underline">Get Started!</a>
          </p>
        </div>
      </div>
    </div>
    );
  };
  export default Register