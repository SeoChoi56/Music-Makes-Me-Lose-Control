import React from "react";
import ProfileSettings from "./ProfileSettings";

function NavBar({ handleHome, handleProfile, handleSearch}) {

    return (
        <nav>
            <span onClick={handleHome}>|| Home ||</span>
            <span onClick={handleSearch}> Search  ||</span>
            <span onClick={handleProfile}> Profile Settings ||</span>
        </nav>
    )
}

export default NavBar