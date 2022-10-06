


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

function Search({genreOptions, selectedGenre, changedGenre, playlistOptions, selectedPlaylist, playlistChanged, listBoxClicked, listBoxitems, clickAPICall}) {
    function genreChange(event) {
        changedGenre(event.target.value)
    }

    function playlistChange(event) {
        playlistChanged(event.target.value)
    }

    function clickSearch(event){
        clickAPICall(event);
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
            <ListTracksFromAPI items={listBoxitems} click={listBoxClicked}/>
        </div>
    )
}

export default Search