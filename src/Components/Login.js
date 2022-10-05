import React, {useEffect, useRef, useState} from "react";

function Login({clientID, clientSecret}) {
    const [token, setToken] = useState("")
    const apiFetchedRef = useRef(false);
    
  
    const fetchAPIToken = () => {
      fetch("https://accounts.spotify.com/api/token", {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa(clientID + ':' + clientSecret),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials'
      })
        .then(res => res.json())
        .then(data => {
          //sets the tokens in state
          console.log(data)
          setToken(data.access_token)
        });
    }

    useEffect(() => {
        if (apiFetchedRef.current) return;
        apiFetchedRef.current = true;
        fetchAPIToken();
      }, [])

    return (
        <div>
            <h1>This is the login Page</h1>
            <form id="loginForm">
                <p>
                    Username: 
                    <input placeholder="Username" name="username" />
                </p>
            </form>
        </div>
    )
}

export default Login