import React, {useEffect, useRef, useState} from "react";
import { BrowserRouter as Router, useNavigate, Routes, Route, Link} from 'react-router-dom'



function Login({handleSubmit}) {
    let navigate = useNavigate();

    return (
        <div id="loginPage">
            <form id="loginForm" onSubmit={(event) => {
                { handleSubmit(event) ? navigate("/home") : navigate("/") }
            }}>
                <h1>Music Makes Me Lose Control</h1>
                <p id="loginID">
                    <strong>Username: </strong><input className="loginCred" placeholder="Username" name="username" />
                </p>
                <p id="loginPass">
                <strong>Password: </strong><input className="loginCred" placeholder="Password" name="password" />
                </p>
                <button type="submit"> Log In </button>
            </form>
        </div>
    )
}

export default Login