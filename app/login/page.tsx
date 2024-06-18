import React from 'react';

// Not functional yet
export default function LoginPage() {
    return (
        <>
            <h1>Login</h1>
            <div className="login">
                <div className="login-field">
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div className="login-field">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <button>Login</button>
            </div>
        </>
    );
}