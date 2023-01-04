import React from "react";
import { Card, CardContent, Typography } from '@material-ui/core';

const EighteenAgain: React.FC = () => {
    return (
        <div style={{ marginLeft:20, marginRight: 20, lineHeight: 1.5}}>
            <h1>{"18 Again"}</h1>
            <h2>{"Basic Information"}</h2>
            <strong>{"Mini-Challenge #6"}</strong>{": 18 Again (X'mas/New Year Special Event)"}<br/>
	        <strong>{"Timeline"}</strong>{": 2022.12.19 ~ 2023.01.15"}<br/>
	        <strong>{"Scoring System"}</strong>{": EX-Score"}<br/>
	        <div style={{ width: '60vw'}}>
                <Card variant="outlined" style={{backgroundColor: "#5EDC9D"}}>
                    <CardContent>
                        <Typography>
                            EX-Score : <b>(perfect + 0.8*great + 0.5*good + 0.1*bad) / (perfect + great + good + bad + miss)</b>
                        </Typography>
                    </CardContent>
                </Card>
	        </div>

            <h2>Featured UCS</h2>
	        <p>Challenge the game master on the UCS that he himself makes! These UCS-es target different skillsets in PIU and will definitely help you improve</p>
	        <div style={{ width : "80%", display: 'flex', margin: "auto", padding : 30}}>
                <Card variant="outlined" style={{ width : '70vw' }}>
                    <CardContent>
                        <Typography component="p">
                            <iframe src="https://www.youtube.com/embed/wZBeiynarzM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <h3>Papa Gonzales</h3>
                            <p>Pressing two notes in quick consecutive moves, just like a drilling motion</p>
                            <p><a href="https://www.piugame.com/bbs/board.php?bo_table=ucs&wr_id=31355" className="btn btn-primary" role="button">UCS Link</a></p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card variant="outlined" style={{ width : '70vw' }}>
                    <CardContent>
                        <Typography component="p">
                            <iframe src="https://www.youtube.com/embed/2p6alD2ND4k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <h3>Yeo Rae A</h3>
                            <p>Build up your "Earth Power" (skills that form the foundation of D18)</p>
                            <p><a href="https://www.piugame.com/bbs/board.php?bo_table=ucs&wr_id=29104" className="btn btn-primary" role="button">UCS Link</a></p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card variant="outlined" style={{ width : '70vw' }}>
                    <CardContent>
                        <Typography component="p">
                            <iframe src="https://www.youtube.com/embed/VO2lq-Pa8ag" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <h3>Mad5cience</h3>
                            <p>Can you read slow? A very common example of BPM change gimmick</p>
                            <p><a href="https://www.piugame.com/bbs/board.php?bo_table=ucs&wr_id=25863" className="btn btn-primary" role="button">UCS Link</a></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <div style={{ width : "80%", display: 'flex', margin: "auto"}}>
                <Card variant="outlined" style={{ width : '70vw' }}>
                    <CardContent>
                        <Typography component="p">
                            <iframe src="https://www.youtube.com/embed/cf9jLb-8v88" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <h3>First Love</h3>
                            <p>Modern-style chart features a lot of two-note-one-foot brackets</p>
                            <p><a href="https://www.piugame.com/bbs/board.php?bo_table=ucs&wr_id=31362" className="btn btn-primary" role="button">UCS Link</a></p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card variant="outlined" style={{ width : '70vw' }}>
                    <CardContent>
                        <Typography component="p">
                            <iframe src="https://www.youtube.com/embed/2gYf6CfxTNY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <h3>Blazing</h3>
                            <p>Front/Back Half-double (all red/blue chart with sharp, straight-line twists)</p>
                            <p><a href="https://www.piugame.com/bbs/board.php?bo_table=ucs&wr_id=31371" className="btn btn-primary" role="button">UCS Link</a></p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card variant="outlined" style={{ width : '70vw' }}>
                    <CardContent>
                        <Typography component="p">
                            <iframe src="https://www.youtube.com/embed/6SUMFzIhyss" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <h3>Jam O Beat</h3>
                            <p>Middle Half-double (chart consisting of only the middle 4 notes)</p>
                            <p><a href="https://www.piugame.com/bbs/board.php?bo_table=ucs&wr_id=31372" className="btn btn-primary" role="button">UCS Link</a></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <h2>Mechanics</h2>
	        <ol type="1">
	            <li>The game master will play a random set of 3 songs out of the 6 songs, and will provide a sum of the 3 songs' scores to the players.</li>
	            <li>
	                The players can choose any 3 songs from the list of 6 songs to challenge the game master's score.
	                (Note: The players do not need to play the same chart as the game master).
	            </li>
	            <li>
	                However, before actually playing the 3 charts, the player should inform the game master of his/her selected 3 songs and
	                the game master will assign an extra chart (non-UCS) to the player.
	                The player then can play all the 4 songs and challenge the game master's score using his/her sum of the 4 songs' scores.
	            </li>
	        </ol>

	        <h2>Objectives</h2>
	        Attain the highest value of <b>(sum of player's 4 songs) - (sum of game master's 3 songs)</b>

            <div style={{ width: '60vw'}}>
                <Card variant="outlined" style={{backgroundColor: "#8D90F4"}}>
                    <CardContent>
                        <Typography component="p">
                            <strong>Example</strong>:
                            <ul>
                                <li>The game master plays Yeo Rae A, Mad5cience and Papa Gonzales, racking a total score of 270% (out of 300%).</li>
                                <li>BEEFUN chooses First Love, Blazing and Jam O Beat as his 3 songs.</li>
                                <li>The game master then assigns Rooftop S16 to him.</li>
                                <li>BEEFUN's total score from playing the 4 songs is 360% (out of 400%).</li>
                                <li>BEEFUN's final score will be 360% - 270% = 90%.</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
	        </div>

            <h2>How do I insert UCS into my account?</h2>
            Please note that before attempting, you must firstly register those songs into your AM.Pass Card so that you might be able 
            to play the charts properly. The step-by-step guide for registering those UCS into your card is as follows:
	        <ol>
		        <li>Login through the <a href="https://www.piugame.com/piu.ucs/ucs.main.php">PIU UCS website</a> with your credentials that's usually used to login to <a href="https://www.piugame.com/piu.xx/">usual PIU Website</a></li>
		        <li>Navigate through the tab named UCS Sharing, and search for the StepMaker ROND</li>
		        <li>There, you will see all 4 UCS that were mentioned on top of this post. Please click on the blue button called <b>SLOT</b> for each of the UCS</li>
		        <li>Then, navigate through the tab named <b>My Activity</b>, and below the table UCS Slot, click <b>Register Game</b></li>
		        <li>The UCS Registration is complete in your card, and you might play those charts in any arcade that has PIU Machine</li>
	        </ol>

            <h2>Other Information</h2>
            <p>
                Additional information for the mini-challenge are as follows:
                <ul>
                    <li>Players are allowed to attempt each of the UCS as many as possible within the time period, however only the one with the highest score for each UCS will be calculated towards the final score</li>
                    <li>Currently, there is no requirement to upload the photo of your scores. However, please fill in the form provided <a href="{{ url_for('score') }}">here</a> honestly. </li>
                </ul>
                Enjoy the competition, and may the odds be ever in your favor.
            </p>
        </div>
    );
};

export default EighteenAgain;