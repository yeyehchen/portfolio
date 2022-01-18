import './App.css';
import Home from './Home';
import About from './About';
import Work from './Work';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import decoration2 from './svg-images/decoration2.svg';
import ScrollToTop from './ScrollToTop';


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Nav/>
      <Routes>
        <Route path="/" element={
          <>
            <img id="right-deco" src={decoration2} />
            <Home />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
