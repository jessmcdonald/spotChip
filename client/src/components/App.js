import React from 'react';
import './App.css';
import axios from "axios";
import { getHashParams } from '../spotify';

const params = getHashParams();
const access_token = params.access_token;
const refresh_token = params.access_token;
const error = params.error;
const token = access_token;
const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', }

class App extends React.Component {
  constructor() {
    super();
    const params = getHashParams();
    const access_token = params.access_token;
    const refresh_token = params.access_token;
    this.state = {
      user: null
    };
}

componentDidMount(){
  this.getUserInfo()
}

//get user
getUserInfo = () => {
    axios.get("https://api.spotify.com/v1/me",
      {
        headers: { Authorization: `Bearer ${access_token}` }
      })
      .then(response => {
        this.setState({ user: response.data});
        console.log(this.state.user)
      })
      .catch(function (error) {
        console.log(error);
      });
};

render() {

  return (
  
    <div className="App">
      <header className="App-header">
      </header>
        

  <body>
    <div class="container">
      <div id="login">
        <h1>This is an example of the Authorization Code flow</h1>
        <a href="/login" class="btn btn-primary" onClick={() => this.getUserInfo()}>Log in with Spotify</a>
      </div>
      {this.state.user.display_name ? (
        <div id="loggedin">
        <div id="user-profile">
          Logged in as {this.state.user.display_name}
        </div>
        <div id="oauth">
        </div>
        <button class="btn btn-default" id="obtain-new-token" >Obtain new token using the refresh token</button>
      </div>

      ) : (
        <a href="/login" class="btn btn-primary" >Log in with Spotify</a>
      )
      }
      
    </div>
  </body>
    </div>
  );
}
}

export default App;
