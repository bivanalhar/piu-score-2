import React from 'react';
import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">{"Home"}</Link>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/comp/18-again">18 Again</Link></li>
                <li><Link to="/submit-score">Submit Score</Link></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;