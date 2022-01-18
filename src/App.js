import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Work from './Work';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
