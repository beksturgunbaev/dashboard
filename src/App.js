import React from 'react';
import './App.css';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="flex text-red-700">
      < Sidebar />
      < Content />
    </div>
  );
}

export default App;

