//Import React and Hook
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

//Import component
import Home from './Container/Home/Home';

//Import style
import './App.css';
import Legal from './Container/Legal/Legal';

function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={ <Home />}></Route>
                    <Route path='/legal' element={ <Legal />}></Route>
                </Routes>
            </Router>

        </div>
  );
}

export default App;
