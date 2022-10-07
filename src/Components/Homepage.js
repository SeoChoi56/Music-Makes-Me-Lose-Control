import React from "react";

import {useNavigate} from "react-router-dom"

function Homepage({userDetail, setProfile }){
    

    function handleDeleteSong(event){
        event.preventDefault();
        const indexToDelete = event.target.parentNode.id
        const storePlaylist = userDetail.playlist
        const playlistFirst = storePlaylist.slice(0, parseInt(indexToDelete));
        const playlistSecond = storePlaylist.slice((parseInt(indexToDelete)+1), storePlaylist.length)
        playlistSecond.map(item => {
                                    item["id"] = parseInt(item.id) - 1
                                    })
        const appendPlaylist = [ ...playlistFirst, ...playlistSecond]
        
        fetch(`http://localhost:3001/users/${userDetail.id}`, {
            method: "PATCH",
            headers: { 'Content-type': "application/json" },
            body: JSON.stringify({
                playlist: appendPlaylist
            })
        })
        .then(res => res.json())
        .then(data => {

            setProfile(data)})
    }

    const favoritesList = userDetail.playlist.map((song) => {

        return (
            <div key={song.id} id={song.id}>{song.title} by {song.artist + " "} 
            <img className="albumCovers" src={song.albumCover} />
                <button onClick={handleDeleteSong}> Delete</button>
            </div>)
    })



    return (
        <div id="homePage">
            <span>
                This is User Profile: {userDetail.username}
                <div>
                    <img src={userDetail.avatarURL} />
                </div>
                <div>Favorite Artist: {userDetail.artist}</div>
                <div>Favorite Genre: {userDetail.genre}</div>
            </span>
            <span> 
                || 
            </span>
            <span>
                This is User Playlist: {favoritesList} 
                
            </span>
        </div>
    )
}

export default Homepage