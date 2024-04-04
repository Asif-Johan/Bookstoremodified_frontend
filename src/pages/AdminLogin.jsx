import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminCredentials from "../../adminCredentials";
const AdminLogin = ({ onAdminLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageForUser, setMessageForUser] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {

    if (AdminCredentials.Password === password && AdminCredentials.Email === email) {
      onAdminLogin(true);
      navigate("/");
    }
    else{
      onAdminLogin(false);
      setMessageForUser("Email or Password or Both Does not match")
    }
  };

  return (
    <div className="text-center border border-green-900 max-w-[20vw] mx-auto py-6 mt-[10%] rounded-2xl shadow-xl shadow-green-100">
      <h1 className="mb-10 text-3xl underline underline-offset-3 text-green-600">Admin Login</h1>
      <div className='form-container flex flex-col justify-center items-center gap-3'>
        <input type="text" className="border border-green-600 bg-green-100 shadow-md shadow-green-100 px-3 py-2 rounded-lg " placeholder='Enter Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="border border-green-600 bg-green-100 shadow-md shadow-green-100 px-3 py-2 rounded-lg " placeholder='Enter Password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className=" text-sm text-red-500">{messageForUser}</div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default AdminLogin;
