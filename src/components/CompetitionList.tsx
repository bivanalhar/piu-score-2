import '../App.css';

import React from 'react';
import { Link } from 'react-router-dom';

const CompetitionList: React.FC = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/comp/18-again">{"18 Again"}</Link>
                </li>
            </ul>
        </>
    );
};

export default CompetitionList;
