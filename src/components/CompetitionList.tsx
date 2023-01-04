import '../App.css';

import React from 'react';
import { Link } from 'react-router-dom';

const CompetitionList: React.FC = () => {
    return (
        <ol>
            <li>
                <Link to="/comp/18-again">{"18 Again"}</Link>
            </li>
        </ol>
    );
};

export default CompetitionList;
