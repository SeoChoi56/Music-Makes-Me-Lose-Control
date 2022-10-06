import React from "react";
import NavBar from "./NavBar";

function Homepage({token, handleHome, handleProfile, handleSearch}){

    return (
        <div>
            <NavBar  handleHome={handleHome} handleProfile={handleProfile} handleSearch={handleSearch}/>
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