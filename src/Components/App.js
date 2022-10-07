import logo from '../logo.svg';
import React, {useState, useEffect, useRef} from 'react';
import "../App.css"
import Login from './Login';
import NavBar from './NavBar';
import Homepage from './Homepage';
import ProfileSettings from './ProfileSettings';
import Search from './Search';
import axios from 'axios'
import ListTracksFromAPI from './ListTracksFromAPI';
import { BrowserRouter as Router, useNavigate, Routes, Route, Link} from "react-router-dom";
import AddSong from './AddSong'
import ErrorPage from './ErrorPage';

//IMPORTANT DO NOT CHANGE!!!
//NEEDED TO MAKE AUTHORIZATION ACCESS
const clientID = "919a93962eb7469fae60cf64c607c567";
const clientSecret = 'b097042ee1d94668b5a76eee7d480272';



function App() {
  const [isLogged, setLogIn] = useState(false)
  const [token, setToken] = useState("")
  const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []})
  const [playlist, setPlaylist] = useState({selectedPlaylist: '', listofPlaylistFromAPI: []})
  const [tracks, setTracks] = useState({selectedTrack: '', listofTracksFromAPI: []})
  const [trackDetail, setTrackDetail] = useState(null)
  const [users, setUser] = useState({username: '', password: ''})
  

  
  

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(clientID + ':' + clientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(res => {
      console.log(res.data.access_token)
      setToken(res.data.access_token)

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: {
          'Authorization' : 'Bearer ' + res.data.access_token
        }
      })
      .then(genreRes => {
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreRes.data.categories.items
        })
        
      })
    })
  }, [genres.selectedGenre, clientID, clientSecret]);
  
  function genreChanged(value) {
    setGenres({
      selectedGenre: value,
      listOfGenresFromAPI: genres.listOfGenresFromAPI
    });

    axios(`https://api.spotify.com/v1/browse/categories/${value}/playlists?limit=10`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(resPlaylist => {
      console.log(resPlaylist)
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listofPlaylistFromAPI: resPlaylist.data.playlists.items
      })
    })
  }

  function playlistChanged (value) {
    setPlaylist({
      selectedPlaylist: value,
      listofPlaylistFromAPI: playlist.listofPlaylistFromAPI
    })
  }

  function callAPIPlaylist(e){
    e.preventDefault()
    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(trackRes => {
      setTracks({
        selectedTrack: tracks.selectedTrack,
        listofTracksFromAPI: trackRes.data.items
      })
    })
  }

  function listboxClicked (value) {
    const currentTracks = [...tracks.listofTracksFromAPI]
    const trackInfo = currentTracks.filter(tracks => tracks.track.id === value.target.id)

    setTrackDetail(trackInfo[0].track)
  }

  useEffect(() => {
    fetch("http://localhost:3001/users", {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      setUser(data)
    })
  }, [])

  function userExist(event) {
    event.preventDefault()
    if((users.filter(user => {
      if(user.username === event.target.username.value){
        console.log(event.target.username.value)
        console.log(user.username)
        if(user.password === event.target.password.value){
          console.log(event.target.password.value)
          console.log(user.password)
          return true
        }
        else {
          return false
        }
      }
      return false
    }))){
      console.log("I've got the user set")
      console.log(isLogged)
      setLogIn(!isLogged)
    }
  }

  return (
    // <div className="App">
    //   {true ?  <Homepage /> : <Search genreOptions={genres.listOfGenresFromAPI} selectedGenre={genres.selectedGenre} changedGenre={genreChanged} playlistOptions={playlist.listofPlaylistFromAPI} selectedPlaylist={playlist.selectedPlaylist} playlistChanged={playlistChanged} listBoxClicked={listboxClicked} listBoxitems={tracks.listofTracksFromAPI} clickAPICall={callAPIPlaylist} />}
    // </div>

    <Router>
      {isLogged ? (
        <nav>
          <Link to="/home" className="hidden">Home</Link>
          <Link to="/search" className="hidden">Search</Link>
          <Link to="/profile" className="hidden">Settings</Link>
        </nav>) : <React.Fragment></React.Fragment>}

      {isLogged ? (
        <Routes>
          <Route path='/home' element={<Homepage />} />
          <Route path='/search' element={<Search genreOptions={genres.listOfGenresFromAPI} selectedGenre={genres.selectedGenre} changedGenre={genreChanged} playlistOptions={playlist.listofPlaylistFromAPI} selectedPlaylist={playlist.selectedPlaylist} playlistChanged={playlistChanged} listBoxClicked={listboxClicked} listBoxitems={tracks.listofTracksFromAPI} clickAPICall={callAPIPlaylist} />} />
          <Route path='/profile' element={<ProfileSettings />} />
          <Route path='/addsong' element={<AddSong />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>)
        : (<Routes>
            <Route path="/" element={<Login handleSubmit={userExist} />} />
          </Routes> )}
    </Router>
  );
}

export default App;
