import logo from '../logo.svg';
import React, {useState, useEffect} from 'react';
import "../App.css"

//IMPORTANT DO NOT CHANGE!!!
//NEEDED TO MAKE AUTHORIZATION ACCESS
const clientID = "919a93962eb7469fae60cf64c607c567";
const clientSecret = 'b097042ee1d94668b5a76eee7d480272';



function App() {
  const [token, setToken] = useState("")
  const [categoryList, setCategoryList] = useState([])

  //fetches the access tokens needed to make requests later
  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: 'POST',
      headers: {
        'Authorization' : 'Basic ' + btoa(clientID + ':' + clientSecret),
        'Content-Type' : 'application/x-www-form-urlencoded',
      },
      body:  'grant_type=client_credentials',
    })
    .then(res => res.json())
    .then(data => {
      //sets the tokens in state
      setToken(data.access_token)
      // console.log(data)
      // console.log(token)
    })
  }, [])
  
  //fetches the list of genres or categories
  useEffect(() => {
    fetch(`https://api.spotify.com/v1/browse/categories/`, {
      method: "GET",
      headers: {
        'Authorization' : 'Bearer ' + token ,
        'Content-Type' : 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setCategoryList(data.categories)
    })
  }, [])

  //this console logs the list of categories to see through
  let categories = categoryList.items
  console.log(categories)
  function showCategories(obj) {
    for(var name in obj) {
      console.log(obj[name].name)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {showCategories(categories)}
        </p>
      </header>
    </div>
  );
}

export default App;
