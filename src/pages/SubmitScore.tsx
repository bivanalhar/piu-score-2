import React, { useState } from "react";
import "../Form.css"

const SubmitScore: React.FC = () => {
    const [score, setScore] = useState({
        username : '',
        event : '',
        stepchart : '',
        perfect : '',
        great : '',
        good : '',
        bad : '',
        miss : ''
    });

    const [error, setError] = useState({
        username : '',
        event : '',
        stepchart : '',
        perfect : '',
        great : '',
        good : '',
        bad : '',
        miss : ''
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(score.username);
    };

    const onInputChange = (e: any) => {
        const { name, value } = e.target;
        setScore(prev => ({
            ...prev,
            [name] : value
        }));
    };

    return (
        <div className="Form2" style={{ marginLeft:20, marginRight: 20, lineHeight: 1.5}}>
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Submit your Score</h1>
                <br/>
                <label htmlFor="username">PIU Username</label>
                <input
                    value={score.username} 
                    onChange={onInputChange}
                    type="text" 
                    placeholder="type your username here" 
                    id="username" 
                    name="username"
                    required
                ></input>
                {error.username && <span className='err'>{error.username}</span>}

                <label htmlFor="event">Event</label>
                <input 
                    value={score.event} 
                    onChange={onInputChange}
                    type="text" 
                    placeholder="choose the event name here" 
                    id="event" 
                    name="event"
                    required
                ></input>
                {error.event && <span className='err'>{error.event}</span>}

                <label htmlFor="stepchart">Stepchart Chosen</label>
                <input 
                    value={score.stepchart} 
                    onChange={onInputChange}
                    type="text" 
                    placeholder="choose your stepchart here" 
                    id="stepchart" 
                    name="stepchart"
                    required
                ></input>
                {error.stepchart && <span className='err'>{error.stepchart}</span>}

                <label htmlFor="perfect">Perfect</label>
                <input 
                    value={score.perfect} 
                    onChange={onInputChange}
                    type="number" 
                    placeholder="please input a valid positive number" 
                    id="perfect" 
                    name="perfect"
                    min="0"
                    required
                ></input>
                {error.perfect && <span className='err'>{error.perfect}</span>}

                <label htmlFor="great">Great</label>
                <input 
                    value={score.great} 
                    onChange={onInputChange}
                    type="number" 
                    placeholder="please input a valid positive number" 
                    id="great" 
                    name="great"
                    min="0"
                    required
                ></input>
                {error.great && <span className='err'>{error.great}</span>}

                <label htmlFor="good">Good</label>
                <input 
                    value={score.good} 
                    onChange={onInputChange}
                    type="number" 
                    placeholder="please input a valid positive number" 
                    id="good" 
                    name="good"
                    min="0"
                    required
                ></input>
                {error.good && <span className='err'>{error.good}</span>}

                <label htmlFor="bad">Bad</label>
                <input 
                    value={score.bad} 
                    onChange={onInputChange}
                    type="number" 
                    placeholder="please input a valid positive number" 
                    id="bad" 
                    name="bad"
                    min="0"
                    required
                ></input>
                {error.bad && <span className='err'>{error.bad}</span>}

                <label htmlFor="miss">Miss</label>
                <input 
                    value={score.miss} 
                    onChange={onInputChange}
                    type="number" 
                    placeholder="please input a valid positive number" 
                    id="miss" 
                    name="miss"
                    min="0"
                    required
                ></input>
                {error.miss && <span className='err'>{error.miss}</span>}

                <button type="submit">Submit Score</button>
                <br />
            </form>
        </div>
    );
};

export default SubmitScore;