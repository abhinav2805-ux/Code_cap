

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* Add other routes here */}
                    <Route path="/" element={<Home/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

