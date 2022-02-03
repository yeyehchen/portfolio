import './App.css';
import Home from './Home';
import HomeMobile from './HomeMobile';
import About from './About';
import AboutMobile from './AboutMobile';
import Work from './Work';
import WorkMobile from './WorkMobile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import decoration2 from './svg-images/decoration2.svg';
import ScrollToTop from './ScrollToTop';
import Contact from './Contact';
import ContactMobile from './ContactMobile';



function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Nav/>
      <Routes>
        <Route path="/" element={
          <>
            {/*<img id="right-deco" src={decoration2} />*/}
            <HomeMobile />
          </>
        } />
        <Route path="/about" element={<AboutMobile/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/contact" element={<ContactMobile/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
