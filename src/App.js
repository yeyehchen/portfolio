import './App.css';
import { useContext } from 'react';
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
import WindowContext from './context/window-context';
import NavMobile from './NavMobile';
import FooterMobile from './FooterMobile';

function App() {

  const windowContext = useContext(WindowContext);

  const render = (landscapeComponent, portraitComponent) => {
    if(windowContext.isLandscape) {
      return landscapeComponent;
    }
    return portraitComponent;
  }

  return (
    <BrowserRouter>
      <ScrollToTop/>
      {render(<Nav/>, <NavMobile/>)}
      <Routes>
        <Route path="/" element={
          <>
            {render(<img id="right-deco" src={decoration2} />, null)}
            {render(<Home/>, <HomeMobile/>)}
          </>
        } />
        <Route path="/about" element={render(<About/>, <AboutMobile/>)} />
        <Route path="/work" element={render(<Work/>, <WorkMobile/>)} />
        <Route path="/contact" element={render(<Contact/>, <ContactMobile/>)} />
      </Routes>
      {render(<Footer/>, <FooterMobile/>)}
    </BrowserRouter>
  );
}

export default App;
