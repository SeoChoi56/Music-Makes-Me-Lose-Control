import React from "react";
import NavBar from "./NavBar";
import {useNavigate} from "react-router-dom"

function Homepage({token, handleHome, handleProfile, handleSearch}){




    return (
        <div>
            <NavBar  handleHome={()=>{}} handleProfile={handleProfile} handleSearch={()=>{}}/>
            <span>
                This is User Profile: {token}
            </span>
            <span> || </span>
            <span>
                This is User Playlist
            </span>
        </div>
    )
}

export default Homepage