import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../Form.css"

const Login: React.FC = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="Form">
            <form className="login-form" onSubmit={handleSubmit}>
                <h3>Login Page</h3>
                <br/>
                <label htmlFor="username">PIU Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="PIU Username" id="username" name="username"/>

                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

                <button type="submit">Log In</button>
                <br />
                <Link to={"/register"}><button className="link-btn">Don't have an account yet? Please register here.</button></Link>
            </form>
        </div>
    );
};

export default Login;