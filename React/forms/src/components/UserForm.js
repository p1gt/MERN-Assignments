import React, { useState } from 'react';

const UserForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    const handleUsername = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length < 1) {
            setUsernameError("Username is required!");
        } else if(e.target.value.length < 3) {
            setUsernameError("Username must be 3 characters or longer!");
        } else {
            setUsernameError("");
        }
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Email must be 3 characters or longer!");
        } else {
            setEmailError("");
        }
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 3) {
            setPasswordError("Password must be 3 characters or longer!");
        } else {
            setPasswordError("");
        }
    }
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
        
        // updating state will change the message to be displayed in the form
        setHasBeenSubmitted( true );
    };
    
    return (
        <>
            <form onSubmit={ createUser }>
                {
                    hasBeenSubmitted ?
                        <h3>Thank you for submitting the form!</h3> :
                        <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={ handleUsername } value={username}/>
                    {
                        username ?
                            <p>{ usernameError }</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ handleEmail } value={email}/>
                    {
                        email ?
                            <p>{ emailError }</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ handlePassword } value={password}/>
                    {
                        password ?
                            <p>{ passwordError }</p> :
                            ''
                    }
                </div>
                {
                    username && email && password ?
                        <input type="submit" value="Create User" /> :
                        <input type="submit" value="Create User" disabled />
                }
            </form>
            <div>
                <h3>User Form Data</h3>
                <p>Username: { username }</p>
                <p>Email Address: { email }</p>
                <p>Password: { password }</p>
            </div>
        </>
    );
};

export default UserForm;
