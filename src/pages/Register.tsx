import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../Form.css"

const Register: React.FC = () => {
    const [input, setInput] = useState({
        fullname : '',
        username : '',
        password : '',
        confirm_password : ''
    });

    const [error, setError] = useState({
        fullname : '',
        username : '',
        password : '',
        confirm_password : ''
    });

    const onInputChange = (e: any) => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name] : value
        }));
        validateInput(e);
    };

    const validateInput = (e: any) => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = {...prev, [name]: "" };

            switch (name) {
                case "fullname":
                    if (!value) {
                        stateObj["fullname"] = "Please enter Fullname";
                    }
                    break;
                
                case "username":
                    if (!value) {
                        stateObj["username"] = "Please enter Username";
                    }
                    break;    
                
                case "password":
                    if (!value) {
                        stateObj["password"] = "Please enter Password";
                    }
                    else if (input.confirm_password && value !== input.confirm_password) {
                        stateObj["confirm_password"] = "Password and Confirm Password does not match";
                    }
                    else {
                        stateObj["confirm_password"] = input.confirm_password ? "" : error.confirm_password;
                    }
                    break;
                
                case "confirm_password":
                    if (!value) {
                        stateObj["confirm_password"] = "Please enter Confirm Password";
                    }
                    else if (input.password && value !== input.password) {
                        stateObj["confirm_password"] = "Password and Confirm Password does not match";
                    }
                    break;
                
                default:
                    break;
            }

            return stateObj;
        })
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(input.username);
    }

    return (
        <div className="Form">
            <form className="login-form" onSubmit={handleSubmit}>
                <h3>Please register your PIU Username</h3>
                <br/>
                <label htmlFor="fullname">Full Name</label>
                <input 
                    value={input.fullname} 
                    onChange={onInputChange}
                    onBlur={validateInput}
                    type="text" 
                    placeholder="Full Name" 
                    id="fullname" 
                    name="fullname"
                    required
                ></input>
                {error.fullname && <span className='err'>{error.fullname}</span>}

                <label htmlFor="username">PIU Username</label>
                <input 
                    value={input.username} 
                    onChange={onInputChange}
                    onBlur={validateInput}
                    type="text" 
                    placeholder="PIU Username" 
                    id="username" 
                    name="username"
                    required
                ></input>
                {error.username && <span className='err'>{error.username}</span>}

                <label htmlFor="password">Password</label>
                <input 
                    value={input.password} 
                    onChange={onInputChange}
                    onBlur={validateInput}
                    type="password" 
                    placeholder="********" 
                    id="password" 
                    name="password"
                    required
                ></input>
                {error.password && <span className='err'>{error.password}</span>}

                <label htmlFor="confirm-password">Confirm Password</label>
                <input 
                    value={input.confirm_password} 
                    onChange={onInputChange}
                    onBlur={validateInput}
                    type="password" 
                    placeholder="********" 
                    id="confirm_password" 
                    name="confirm_password"
                    required
                ></input>
                {error.confirm_password && <span className='err'>{error.confirm_password}</span>}

                <button type="submit">Register</button>
                <br />
                <Link to={"/login"}><button className="link-btn">Already have an account? Login.</button></Link>

            </form>
        </div>
    );
};

export default Register;