import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "../src/Pages/Signup";
import Login from "../src/Pages/Login";
import Response from "../src/Pages/Response";
import HomePage from "../src/Pages/HomePage";
import ForgotPassword from "../src/Pages/ForgotPassword";
import ResetPassword from "../src/Pages/ResetPassword";
import CreatePost from "./components/CreatePost";

import { AppContext } from "./context/AppContext";
import { useSelector } from "react-redux";

import Sidebar from "./components/Sidebar";

import "./App.css";
import DisplayProfile from "./components/DisplayProfile";
import DisplayFavourites from "./components/DisplayFavourites";
import Discuss from "./Pages/Discuss";
import EditProfile from "./components/EditProfile";
import DisplayDoubt from "./Pages/DisplayDoubt";

function App() {
  const user = useSelector((state) => state?.user);
  const [status, setStatus] = useState(false);

  return (
    <AppContext.Provider value={{ user, status, setStatus }}>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          {!user && <Route path="/signup" element={<Signup />} />}
          {user && <Route path="/signup" element={<HomePage />} />}

          {!user && <Route path="/login" element={<Login />} />}
          {user && <Route path="/login" element={<HomePage />} />}

          {!user && <Route path="/create/file" element={<Login />} />}
          {user && <Route path="/create/file" element={<CreatePost />} />}

          {user && <Route path="/account" element={<DisplayProfile />} />}
          {!user && <Route path="/account" element={<Login />} />}

          {user && <Route path="/starred" element={<DisplayFavourites />} />}
          {!user && <Route path="/account" element={<Login />} />}

          {user && <Route path="/edit/profile" element={<EditProfile />} />}
          {!user && <Route path="/edit/profile" element={<Login />} />}

          <Route path="/discuss" element={<Discuss />} />
          <Route path="/doubt" element={<DisplayDoubt />} />

          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/new/password" element={<ResetPassword />} />

          <Route path="/response" element={<Response />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
