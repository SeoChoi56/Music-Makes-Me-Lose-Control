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
            <div className="song">
                <div className="song-body"  key={song.id} id={song.id}>
                    <h4> {song.title} by {song.artist + " "} </h4>
                    <img className="albumCovers" src={song.albumCover} />
                    <button onClick={handleDeleteSong}> Delete</button>
                </div>
            </div>
            )
    })



    return (
        
        <> 
                <div className="user-profile">
                    This is User Profile: {userDetail.username}
                    <div className="">
                        <img className="userPhoto" src={userDetail.avatarURL} />
                    </div>
                    <div>Favorite Artist: {userDetail.artist}</div>
                    <div>Favorite Genre: {userDetail.genre}</div>
                </div>

                <div className="userPlaylistCard">
                    <h3>This is User Playlist:</h3> 
                    <div className='fav-list'>
                        {favoritesList}
                    </div> 
            
                </div>
        </>
    
    )
}

export default Homepage