import React, {useEffect, useRef, useState} from "react";



function Login({token, handleSubmit}) {
    const usernameTag = "Username: "
    const passwordTag = "Password: "



    //onSubmit form should redirect to home page
    //Home page contains profile info:
            //username:
            //userAvatar:
            //show users: Favorite Song List

    
    return (
        <div>
            <h1>This is the login Page with {token}</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                <p> 
                    {usernameTag}
                    <input placeholder="Username" name="username" />
                </p>
                <p>
                    {passwordTag}
                    <input placeholder="Password" name="password" />
                </p>
                <input type="submit" value="Log In"/>
            </form>
        </div>
    )
}

export default Login