import React from 'react';
// import manifest from './manifest.json';
import Header from './components/Header';
import IconBox from './components/IconBox';
import TitleBox from './components/Titles';
import ChevronUp from './icons/ChevronUp';
import './index.css';

const App = () => {

  const [scrollOpac, setScrollOpac] = React.useState(1);

  document.addEventListener("scroll", () => {
    setScrollOpac(1 - (window.scrollY / 141));
  });

  return (
    <div className="App">
      <div style={{ opacity: scrollOpac }} className="sticky-head">
        <Header />
        <TitleBox />
        <div className="swipe-up-chev">
          <ChevronUp fill="white" style={{ marginInlineEnd: "10px" }} /><p>Swipe up to explore</p>
        </div>
      </div>
      <IconBox />
      <div className="noise"></div>
      <div className="background"></div>
    </div>
  );
}
 
export default App;
