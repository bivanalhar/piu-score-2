import CompetitionList from '../components/CompetitionList';
import React from 'react';

const Home: React.FC = () => {
    return (
        <div style={{ marginLeft:20, marginRight: 20, lineHeight: 1.5}}>
            <h2>{"Welcome to PIU Score Submitter"}</h2>
            <br />
            {"Here are the list of competitions that you can participate:"}
            <br />
            <CompetitionList />
        </div>
    );
};

export default Home;
