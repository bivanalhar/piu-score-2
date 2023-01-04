import CompetitionList from '../components/CompetitionList';
import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <h2>{"Welcome to PIU Score Submitter"}</h2>
            <br />
            {"Here are the list of competitions that you can participate:"}
            <br />
            <CompetitionList />
        </>
    );
};

export default Home;
