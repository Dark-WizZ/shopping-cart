import Navbar from "./components/Navbar";
import './App.css'
import {BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";

function App() {
  return <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Routes>
    </Router>
  </div>
}

export default App;
