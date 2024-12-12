import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth.jsx";
import Feed from "./components/Feed.jsx";
import Profile from "./components/Profile.jsx";
import CreatePost from "./components/CreatePost.jsx";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
