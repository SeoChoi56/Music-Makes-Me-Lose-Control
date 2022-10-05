import logo from '../logo.svg';
import React, {useState, useEffect, useRef} from 'react';
import "../App.css"
import Login from './Login';

//IMPORTANT DO NOT CHANGE!!!
//NEEDED TO MAKE AUTHORIZATION ACCESS
const clientID = "919a93962eb7469fae60cf64c607c567";
const clientSecret = 'b097042ee1d94668b5a76eee7d480272';



function App() {
  
  //fetches the access tokens needed to make requests later


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

  //this console logs the list of categories to see through
  // let categories = categoryList.items
  // console.log(categories)
  // function showCategories(obj) {
  //   for(var name in obj) {
  //     console.log(obj[name].name)
  //   }
  // }

  return (
    <div className="App">
      <Login clientID={clientID} clientSecret={clientSecret}/>
    </div>
  );
}

export default App;
