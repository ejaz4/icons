import React from 'react';
// import manifest from './manifest.json';
import Header from './components/Header';
import IconBox from './components/IconBox';
import TitleBox from './components/Titles';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <TitleBox />
        <IconBox />
      </div>
      <div className="noise"></div>
      <div className="background"></div>
    </div>
  );
}
 
export default App;
