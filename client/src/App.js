import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Project from "./scenes/project";
import Task from "./scenes/task";
import Messages from "./scenes/messages";
import Finance from "./scenes/finance";
import { createContext, useState, useEffect } from "react";
import SignIn from "./scenes/landingPage";
import LandingPage from "./scenes/landingPage";

export const ThemeContext = createContext();
export const StateManager = createContext();
function App() {
  const [theme, setTheme] = useState("light");
  const [userData, setUserData] = useState({
    user: null,
    token: null,
  });
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="app text-slate-800 dark:text-white duration-300">
      <ThemeContext.Provider value={[theme, setTheme]}>
        <StateManager.Provider value={[userData, setUserData]}>
          <BrowserRouter>
            <Routes>
              {userData.token !== null ? (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/finance" element={<Finance />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/project" element={<Project />} />
                  <Route path="/task" element={<Task />} />
                </>
              ) : (
                <>
                  <Route path="/home" element={<Dashboard />} />
                  <Route path="/signin" element={<LandingPage />} />
                </>
              )}
            </Routes>
          </BrowserRouter>
        </StateManager.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
