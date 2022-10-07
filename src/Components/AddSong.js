import React from "react"

function AddSong({userDetail, setProfile }){

    function handleAddSong(event) {
        event.preventDefault();
        console.log(event.target.trackName.value)
        const songToAdd = {
                            title: event.target.trackName.value, 
                            artist: event.target.trackArtist.value, 
                            albumCover: event.target.albumIMG.value}
        console.log(userDetail)
        userDetail.playlist.push({...songToAdd, id: userDetail.playlist.length})
        fetch(`http://localhost:3001/users/${userDetail.id}`, {
            method: "PATCH",
            headers: { 'Content-type': "application/json" },
            body: JSON.stringify({
                playlist: userDetail.playlist
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProfile(data)})
        document.getElementById("addsong").reset();
    }


    return (
        <div>
            <form id="addsong" onSubmit={handleAddSong}>
                <h1>Name: <input placeholder="Song" name="trackName" /> </h1>
                <h1>Artist: <input placeholder="Artist" name="trackArtist" /></h1>
                <h1>Album IMG: <input placeholder="Album Cover" name="albumIMG" /></h1>
                <button type="submit">Add a Song</button>
            </form>
        </div>
    )
}

export default AddSong