import InputList from "./components/inputlist/InputList";
import Login from "./components/login/login";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") || false
  );
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginClicked = () => {
    if ((userName === "admin" || userName === "user") && password === "pass") {
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("userName", userName);
      setIsLoggedIn(true);
      navigate("/list");
    } else {
      setIsLoggedIn(false);
      alert("wrong credentials!");
    }
  };

  return (
    <div>
      <div className="appouter"></div>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              setUserName={setUserName}
              setPassword={setPassword}
              loginClicked={loginClicked}
            ></Login>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <InputList
                userName={userName}
                setUserName={setUserName}
                setIsLoggedIn={setIsLoggedIn}
              ></InputList>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
