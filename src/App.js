import React from 'react';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        < Sidebar />
        < Content />
      </BrowserRouter>
    </div>
  );
}

export default App;

