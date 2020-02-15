import React from "react";
import "./App.css";
import axios from "axios";
import { getHashParams } from "../spotify";

import UserInfo from "./UserInfo/UserInfo";
import RecentlyPlayed from "./RecentlyPlayed/RecentlyPlayed";
import Playlists from "./Playlists/Playlists";
import RecentGenres from "./RecentGenres/RecentGenres";

import { user } from "./mockData";

const params = getHashParams();
const access_token = params.access_token;
const refresh_token = params.access_token;
const error = params.error;
const token = access_token;
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json"
};

class App extends React.Component {
  constructor() {
    super();
    const params = getHashParams();
    const access_token = params.access_token;
    const refresh_token = params.access_token;
    this.state = {
      //user: user
      user: null
    };
  }

  componentDidMount() {
    this.getUserInfo();
  }

  //get user
  getUserInfo = () => {
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${access_token}` }
      })
      .then(response => {
        this.setState({ user: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="App-Container">
          {this.state.user ? (
            <div id="homedash" className="homedash">
              <div className="item-a">
                <UserInfo
                  key={this.state.user.display_name}
                  id={this.state.user.display_name}
                  user={this.state.user}
                  access_token={access_token}
                />
              </div>
              <div className="item-b">
                <RecentlyPlayed
                  key="recentlyplayed"
                  id="recentlyplayed"
                  access_token={access_token}
                />
              </div>
              <div className="item-c">
                <Playlists
                  key="playlistsgrid"
                  id="playlistsgrid"
                  access_token={access_token}
                />
              </div>
              <div className="item-d">
                <RecentGenres
                  key="recentgenreschart"
                  id="recentgenreschart"
                  access_token={access_token}
                />
              </div>
            </div>
          ) : (
            <div id="login" className="App-login">
              <h1>SpotChip</h1>

              <a
                href="/login"
                class="login-btn"
                onClick={() => this.getUserInfo()}
              >
                Log in with Spotify
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
