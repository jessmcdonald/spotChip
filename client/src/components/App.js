import React from "react";
import "./App.css";
import axios from "axios";
import { getHashParams } from "../spotify";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import UserInfo from "./UserInfo/UserInfo";
import HomeDashboard from "./HomeDashboard/HomeDashboard";
import TopTracksArtists from "./TopTracksArtists/TopTracksArtists";
import FindShows from "./FindShows/FindShows";
import ArtistInfo from "./ArtistInfo/ArtistInfo";

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
      //user: user,
      user: null,
      currentlyPlaying: null
    };
  }

  componentDidMount() {
    this.getUserInfo();
    this.getCurrentlyPlaying();
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

  getCurrentlyPlaying = () => {
    axios
      .get("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: { Authorization: `Bearer ${access_token}` }
      })
      .then(response => {
        this.setState({ currentlyPlaying: response.data });
        console.log(this.state.currentlyPlaying);
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
            <Router>
              <div id="homedash" className="homedash">
                <div className="item-a">
                  <UserInfo
                    key={this.state.user.display_name}
                    id={this.state.user.display_name}
                    user={this.state.user}
                    access_token={access_token}
                    getCurrentlyPlaying={this.getCurrentlyPlaying}
                    currentlyPlaying={this.state.currentlyPlaying}
                  />
                </div>

                <div className="nav-panel item-b">
                  <div className="ButtonPanel">
                    <Link to="/" className="RouteLink ">
                      <button className="nav-button">Dashboard</button>
                    </Link>
                    <Link to="/toptracksartists" className="RouteLink">
                      <button className="nav-button">
                        Top Tracks + Artists
                      </button>
                    </Link>
                    <Link to="/shows" className="RouteLink">
                      <button className="nav-button">Find Shows</button>
                    </Link>
                  </div>
                </div>

                <Switch>
                  <Route exact path="/" className="item-c">
                    <HomeDashboard
                      access_token={access_token}
                      getCurrentlyPlaying={this.getCurrentlyPlaying}
                    />
                  </Route>
                  <Route path="/toptracksartists" className="item-c">
                    <TopTracksArtists
                      access_token={access_token}
                      getCurrentlyPlaying={this.getCurrentlyPlaying}
                    />
                  </Route>
                  <Route path="/shows">
                    <FindShows />
                  </Route>
                  <Route path="artists/:artistname" className="item-c">
                    <ArtistInfo
                      access_token={access_token}
                      getCurrentlyPlaying={this.getCurrentlyPlaying}
                    />
                  </Route>
                </Switch>
              </div>
            </Router>
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
