import Home from './pages/Home';
import EighteenAgain from './pages/18_Again';
import NavigationBar from './components/NavigationBar';
import Login from './pages/Login';
import Register from './pages/Register';

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors';
import SubmitScore from './pages/SubmitScore';

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});

const App: React.FC = () => {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <NavigationBar />
                    <Routes>
                        <Route path="/comp/18-again" element={<EighteenAgain />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/submit-score" element={<SubmitScore />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
