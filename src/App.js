import React from 'react';
// import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import HomePage from "./components/content/home/HomePage";
import Analytic from "./components/content/analytics/Analytic";
import Header from "./components/header/Header"

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        < Sidebar />
        <div className="w-full">
                < Header />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/analytics" element={<Analytic/>} />
                </Routes>
            </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

