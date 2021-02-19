import React from 'react';

import SearchBox from '../search-box/search-box.component';
import Home from '../home/home.component';

import './app.style.scss';

function App() {
  return (
    <div className="app">
      <SearchBox />
      <Home />
    </div>
  );
}

export default App;
