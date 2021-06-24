import React from 'react';
import ReactDOM from 'react-dom';
import SectionIntro from './Home/SectionIntro';
import Home from './Home/index';


ReactDOM.render(
  <React.StrictMode>
    <Home/>
    <SectionIntro/>
  </React.StrictMode>,
  document.getElementById('root')
);

