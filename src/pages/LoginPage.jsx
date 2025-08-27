import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const payload = {
    userName: "",
    password: "",
  };
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(payload);
  const [loading , setLoading] = useState(false)
  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setLoginData((prev) => ({ ...prev, [key]: value }));
  };

  console.log(loginData);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)

    //api call 

    setTimeout(() => {
      setLoading(false)
      navigate("/")

    }, 2000);

  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={loginData.userName}
            name="userName"
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={loginData.password}
            name="password"
            onChange={handleInput}
          />
        </div>
        <button type="submit">{loading ? "Loadding....": "Login"}</button>
      </form>
    </div>
  );
}

export default LoginPage;
