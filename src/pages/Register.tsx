import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../Form.css"

const Register: React.FC = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="Form">
            <form className="login-form" onSubmit={handleSubmit}>
                <h3>Please register your PIU Username</h3>
                <br/>
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" id="name" name="name"/>

                <label htmlFor="username">PIU Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="PIU Username" id="username" name="username"/>

                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

                <button type="submit">Register</button>
                <br />
                <Link to={"/login"}><button className="link-btn">Already have an account yet? Login.</button></Link>

            </form>
        </div>
    );
};

export default Register;