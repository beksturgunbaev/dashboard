import React from 'react';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="flex">
      < Sidebar />
      < Content />
    </div>
  );
}

export default App;

