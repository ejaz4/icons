import React from 'react';
// import manifest from './manifest.json';
import Header from './components/Header';
import IconBox from './components/IconBox';
import TitleBox from './components/Titles';
import ChevronUp from './icons/ChevronUp';
import './index.css';

const App = () => {

  const [scrollOpac, setScrollOpac] = React.useState(1);

  const [scrollBlur, setScrollBlur] = React.useState(0);

  const [banner, setBanner] = React.useState(false);

  const [currentIcon, setCurrentIcon] = React.useState('Home');
  
  React.useEffect(() => {
    if (window.location.hash != undefined) {
      setCurrentIcon(window.location.hash);
    }
  }, [])

  document.addEventListener("scroll", () => {
    if (window.innerWidth > 728) {
      setScrollOpac(1 - (window.scrollY / 141));
    } else {
      setScrollOpac(1 - (window.scrollY / 282));
      setScrollBlur((window.scrollY / 141));
    }
  });

  React.useEffect(() => {
    if (navigator.userAgent.includes("Chrome")) {
      setBanner(true);
    }

  }, [])



  return (
    <div className="App">
        {banner && <div style={{ fontFamily: 'Deja Vu Sans, serif', backgroundColor: 'rgba(255,255,255)', height: '30vh', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'black'}}>
          <h1>Aw Snap...</h1>
          <p>This browser is no longer supported. Please use an alternative browesr such as Firefox.</p>
        </div>}

      <div style={{ opacity: scrollOpac }} className="sticky-head">
        <Header />
        <TitleBox />
        <div className="swipe-up-chev">
          <ChevronUp fill="white" style={{ marginInlineEnd: "10px" }} /><p>Swipe up to explore</p>
        </div>
      </div>
      <IconBox currentic={[currentIcon, setCurrentIcon]} />
      <div className="noise"></div>
      <div className="background"></div>
    </div>
  );
}
 
export default App;
