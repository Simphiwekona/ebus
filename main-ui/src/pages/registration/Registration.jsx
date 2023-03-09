import React, { useState } from 'react';

function Registration() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');

    const handleUsernameChange = (event) => {
        setUserName (event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword (event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail (event.target.value);
    };

    const handleWebsiteChange = (event) => {
        setWebsite (event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submitting registration: ${username}, ${password}, ${email}, ${website}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign Up page</h1>
            <div className='form-group'>
            <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            </div>
            <div className='form-group'>
            <label>
                Email:
                <input type="text" value={email} onChange={handleEmailChange} />
            </label>
            </div>
            <div className='form-group'>
            <label>
                Website:
                <input type="text" value={website} onChange={handleWebsiteChange} />
            </label>
            </div>
            <div className='form-group'>
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            </div>

            <button type='submit'>Register</button>
        </form>
    )
}

 
export default Registration;