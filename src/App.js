import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useOnceEffect } from "./components/common/CustomHook";
import UserContext from "./components/common/UserContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./components/common/NoPage";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import "./App.css";

function App() {
  // const navigate = useNavigate();

  const [user, setUser] = useState({});

  const [role, setRole] = useState("user");

  useOnceEffect(() => {}, []);

  return (
    <div>
      <UserContext.Provider value={{ user: user, role: role }}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
