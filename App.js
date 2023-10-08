import Header from './header/header';

import Home from './header/home';

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Signup from './header/Signup';

import Login from './header/login';

import Navbar from './header/Navbar';






function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={< Header />} />   
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      

      </Routes>

    </BrowserRouter>
  )
}
export default App;
