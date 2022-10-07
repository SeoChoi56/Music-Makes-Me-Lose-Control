import React, {useEffect, useRef, useState} from "react";
import { BrowserRouter as Router, useNavigate, Routes, Route, Link} from 'react-router-dom'



function Login({handleSubmit}) {
    const usernameTag = "Username: "
    const passwordTag = "Password: "
    let navigate = useNavigate();



    //onSubmit form should redirect to home page
    //Home page contains profile info:
            //username:
            //userAvatar:
            //show users: Favorite Song List

    
    return (
        <div>
            <form id="loginForm" onSubmit={(event) => {
                                                        handleSubmit(event)
                                                        navigate("/home")}
                                            }
            >
                <p> 
                    {usernameTag}
                    <input placeholder="Username" name="username" />
                </p>
                <p>
                    {passwordTag}
                    <input placeholder="Password" name="password" />
                </p>
                <button type="submit"> Log In </button>
            </form>
        </div>
    )
}

export default Login