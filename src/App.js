import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import Portal from "./pages/Portal"
import NoPage from "./pages/NoPage"
import Login from "./pages/Login"
import { useState, useEffect } from 'react';
import {auth} from './config/firebase'
import './index.css'

function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
        console.log("User state changed: ", u);
        setUser(u);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portal" element={user ? <Portal /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
