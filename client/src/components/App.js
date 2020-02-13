import React from "react";
import "./App.css";
import axios from "axios";
import { getHashParams } from "../spotify";

import UserInfo from "./UserInfo/UserInfo";
import RecentlyPlayed from "./RecentlyPlayed/RecentlyPlayed";

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
        console.log(this.state.user);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <body>
          <div class="container">
            {this.state.user ? (
              <div id="homedash">
                <div id="user-profile">
                  <RecentlyPlayed
                    key="recentlyplayed"
                    id="recentlyplayed"
                    access_token={access_token}
                  />
                  <UserInfo
                    key={this.state.user.display_name}
                    id={this.state.user.display_name}
                    user={this.state.user}
                    access_token={access_token}
                  />
                </div>
              </div>
            ) : (
              <div id="login" className="App-login">
                <h1>Spotify Spot</h1>

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
        </body>
      </div>
    );
  }
}

export default App;
