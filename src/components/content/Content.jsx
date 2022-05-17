import React from "react";
import Header from "../header/header";
import HomePage from "./home/HomePage";
import Analytic from "./analytics/Analytic";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Content = function() {
    return(
        <Router>
            <div className="w-full">
                < Header />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/analytics" element={<Analytic/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default Content;