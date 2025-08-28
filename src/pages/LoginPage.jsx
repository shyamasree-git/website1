import * as yup from "yup";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const payload = {
    username: "",
    email: "",
  };
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(payload);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setLoginData((prev) => ({ ...prev, [key]: value }));
  };

  // Yup schema for API response
  const loginResponseSchema = yup.object().shape({
    data: yup.object().shape({
      token: yup.string().required("Token is required"),
    }),
    success: yup.boolean().required(),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setLoading(true);
    setError("");

    // Client-side validation before API
    if (!loginData.username.trim()) {
      setError("Username is required");
      return;
    }
    if (!loginData.email.trim()) {
      setError("Email is required");
      return;
    }

    setLoading(true);

    const body = {
      username: loginData.username, // API expects `username`
      email: loginData.email, // API expects `password`
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:3001/validatelogin",
        body,
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      );
      // Validate API response shape
      await loginResponseSchema.validate(response.data);

      console.log("Valid API data:", response.data);

      // Example: store token and redirect
      if (response.data?.data?.token) {
        localStorage.setItem("token", response.data.data.token);
        navigate("/");
      }
    } catch (err) {
      console.error("Error:", err.message);

      if (err.name === "ValidationError") {
        setError("Invalid API response: " + err.message);
      } else if (err.response) {
        setError(err.response.data.message || "Login failed");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="h-screen flex bg-gray-bg1">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
          <h2 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
            Login
          </h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={loginData.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="username">Name</label>
              <input
                className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                type="text"
                id="username"
                name="username"
                placeholder="Your name"
                value={loginData.username}
                onChange={handleInput}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none"
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
