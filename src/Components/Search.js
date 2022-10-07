


  // useEffect(() => {
  //   fetch(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {
  //     method: "GET",
  //     headers: {
  //       'Authorization': 'Bearer ' + token,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }, [])

  import React, {useState, useEffect, useRef}from "react";
  import ListTracksFromAPI from "./ListTracksFromAPI";
  import SongDetail from "./SongDetail"

function Search({genreOptions, selectedGenre, changedGenre, playlistOptions, selectedPlaylist, playlistChanged, listBoxClicked, listBoxitems, clickAPICall, trackDetail, userDetail, setProfile}) {
    function genreChange(event) {
        changedGenre(event.target.value)
    }

    function playlistChange(event) {
        playlistChanged(event.target.value)
    }

    function clickSearch(event){
        clickAPICall(event);
    }

    function addFavoriteSong(event) {
        event.preventDefault()
        let count = userDetail.playlist.length;
        const playlist = userDetail.playlist;
        userDetail.playlist.push({
                                    id: count,
                                    title: trackDetail.name, 
                                    artist: trackDetail.artists[0].name, 
                                    albumCover: trackDetail.album.images[0].url 
                                }) 
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
    }

    return (
        <div>
            <select id="genreSelect" onChange={genreChange} value={selectedGenre}>
                {genreOptions.map((item, idx) => <option key={idx} value={item.id}>{item.name}</option>)}
            </select>
            <select id="playlistSelect" value={selectedPlaylist} onChange={playlistChange}>
                {playlistOptions.map((item, idx) => <option key={idx} value={item.id}>{item.name}</option>)}
            </select>
            <button type="submit" onClick={clickSearch}>Search</button>
            <button onClick={addFavoriteSong}>Add Song</button>
            <ListTracksFromAPI items={listBoxitems} click={listBoxClicked}/>
            {trackDetail && <SongDetail {...trackDetail} />}
        </div>
    )
}

export default Search