import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Pages/Inicio';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Inicio" element={<Inicio />} />
            </Routes>
        </Router>
    );
};

export default App;
