import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { StateManager, ThemeContext } from "../../App.js";

import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useContext(ThemeContext);
  const [dataUser, setDataUser] = useContext(StateManager);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const [dataRegister, setDataRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    picturePath: "",
    friends: [],
    location: "",
    occupation: "",
  });

  const [isLoginPage, setIsLoginPage] = useState(false);

  const handleInputLogin = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "email") {
      setDataLogin({ ...dataLogin, email: value });
    } else if (name === "password") {
      setDataLogin({ ...dataLogin, password: value });
    }
  };

  const handleInputRegister = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "email") {
      setDataRegister({ ...dataRegister, email: value });
    } else if (name === "password") {
      setDataRegister({ ...dataRegister, password: value });
    } else if (name === "firstName") {
      setDataRegister({ ...dataRegister, firstName: value });
    } else if (name === "lastName") {
      setDataRegister({ ...dataRegister, lastName: value });
    } else if (name === "picturePath") {
      setDataRegister({ ...dataRegister, picturePath: value });
    } else if (name === "occupation") {
      setDataRegister({ ...dataRegister, occupation: value });
    } else if (name === "friends") {
      setDataRegister({ ...dataRegister, friends: value });
    } else if (name === "location") {
      setDataRegister({ ...dataRegister, location: value });
    }
  };

  const login = async (values, onSubmitProps) => {
    values.preventDefault();
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataLogin),
    });
    const loggedIn = await loggedInResponse.json();
    if (loggedIn) {
      setDataLogin({
        email: "",
        password: "",
      });
      setDataUser({
        user: loggedIn.user,
        token: loggedIn.token,
      });
      navigate("/dashboard");
    }
  };

  const register = async (values, onSubmitProps) => {
    values.preventDefault();
    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataRegister),
      }
    );
    const savedUser = await savedUserResponse.json();
    if (savedUser) {
      setDataRegister({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        picturePath: "",
        friends: [],
        location: "",
        occupation: "",
      });

      setIsLoginPage(true);
    }
  };

  return (
    <div className="h-screen bg-slate-200 dark:bg-slate-600 w-screen p-8">
      <div className="bg-slate-50 dark:bg-slate-800 h-full rounded-3xl p-12 px-8 sm:px-20 text-xs sm:text-sm">
        <div className="flex justify-between items-center">
          <div className="text-xl">Dashboard</div>
          <div className="flex items-center">
            <button
              onClick={handleTheme}
              className="hover:bg-blue-100 hover:text-blue-800 mr-4 font-medium duration-200 rounded-full p-2"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-brightness-high"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-moon-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => {
                setIsLoginPage(true);
              }}
              className=" mr-4 rounded-lg dark:bg-purple-700 bg-purple-400 px-3 p-2"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setIsLoginPage(false);
              }}
              className=" rounded-lg dark:bg-purple-700 bg-purple-400 px-3 p-2"
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="flex flex-row-reverse py-12">
          {isLoginPage ? (
            <div className="bg-slate-700  dark:bg-slate-100 rounded-3xl p-8 h-96 w-80 text-slate-100 dark:text-slate-900">
              <div className="text-xl mb-4">Welcome Back...</div>
              <div>
                <form
                  className="flex flex-col gap-2 dark:text-slate-100 text-slate-900"
                  onSubmit={login}
                >
                  <input
                    type="text"
                    onChange={handleInputLogin}
                    value={dataLogin.email}
                    required
                    name="email"
                    placeholder="Email"
                    className="rounded-lg p-3 px-4 bg-slate-100 border-slate-300 border-2"
                  />
                  <input
                    type="password"
                    onChange={handleInputLogin}
                    value={dataLogin.password}
                    required
                    name="password"
                    placeholder="Password"
                    className="rounded-lg p-3 px-4 bg-slate-100 border-slate-300 border-2"
                  />
                  <div>
                    <button
                      type="submit"
                      className="bg-slate-200 p-3 px-4 text-slate-900 rounded-lg"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="bg-slate-700  dark:bg-slate-100 rounded-3xl p-8 h-96 w-80 text-slate-100 dark:text-slate-900">
              <div className="text-xl mb-4">Welcome Back...</div>
              <div>
                <form
                  className="flex flex-col gap-2 dark:text-slate-100 text-slate-900"
                  onSubmit={register}
                >
                  <div className="flex flex-row justify-between w-full gap-2">
                    <input
                      type="text"
                      onChange={handleInputRegister}
                      value={dataRegister.firstName}
                      required
                      name="firstName"
                      placeholder="First Name"
                      className="w-1/2 rounded-lg p-3 px-4 bg-slate-100 border-slate-300 border-2"
                    />
                    <input
                      type="text"
                      onChange={handleInputRegister}
                      value={dataRegister.lastName}
                      required
                      name="lastName"
                      placeholder="Last Name"
                      className="w-1/2 rounded-lg p-3 px-4 bg-slate-100 border-slate-300 border-2"
                    />
                  </div>
                  <input
                    type="text"
                    onChange={handleInputRegister}
                    value={dataRegister.email}
                    required
                    name="email"
                    placeholder="Email"
                    className="rounded-lg p-3 px-4 bg-slate-100 border-slate-300 border-2"
                  />
                  <input
                    type="password"
                    onChange={handleInputRegister}
                    value={dataRegister.password}
                    required
                    name="password"
                    placeholder="Password"
                    className="rounded-lg p-3 px-4 bg-slate-100 border-slate-300 border-2"
                  />
                  <div className="flex flex-row justify-between w-full gap-2">
                    <input
                      type="text"
                      onChange={handleInputRegister}
                      value={dataRegister.location}
                      required
                      name="location"
                      placeholder="Location"
                      className="w-1/2 rounded-lg p-3 px-4 bg-slate-100 border-slate-300 border-2"
                    />
                    <input
                      type="text"
                      onChange={handleInputRegister}
                      value={dataRegister.occupation}
                      required
                      name="occupation"
                      placeholder="Occupation"
                      className="w-1/2 rounded-lg p-3 px-4 bg-slate-100 border-slate-300 border-2"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-slate-200 p-3 px-4 text-slate-900 rounded-lg"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {/* <button
                onClick={login}
                className="bg-slate-200 p-3 px-4 text-slate-900 rounded-lg"
              >
                Sign In
              </button> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
