import React from "react";
import { Button, Card, CardContent, Fade, Typography } from '@material-ui/core';
import { blue } from "@material-ui/core/colors";

const EighteenAgain: React.FC = () => {
    return (
        <>
            <h1>{"18 Again"}</h1>
            <h2>{"Basic Information"}</h2>
            <strong>{"Mini-Challenge #6"}</strong>{": 18 Again (X'mas/New Year Special Event)"}
            <br/>

	        <strong>{"Timeline"}</strong>{": 2022.12.19 ~ 2023.01.15"}
            <br/>

	        <strong>{"Scoring System"}</strong>{": EX-Score"}
            <br/>

	        <div style={{ width: '60vw'}}>
                <Card variant="outlined" style={{backgroundColor: "#5EDC9D"}}>
                    <CardContent>
                        <Typography component="p">
                            {'EX-Score : (perfect + 0.8*great + 0.5*good + 0.1*bad) / (perfect + great + good + bad + miss)'}
                        </Typography>
                    </CardContent>
                </Card>
	        </div>
        </>
    );
};

export default EighteenAgain;