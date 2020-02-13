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
      user: {
        country: "DE",
        display_name: "Jessie Jane Mcdonald",
        email: "jessicajanemcdonald@gmail.com",
        explicit_content: {
          filter_enabled: false,
          filter_locked: false
        },
        external_urls: {
          spotify: "https://open.spotify.com/user/stanleymeowskers"
        },
        followers: {
          href: null,
          total: 10
        },
        href: "https://api.spotify.com/v1/users/stanleymeowskers",
        id: "stanleymeowskers",
        images: [
          {
            height: null,
            url:
              "https://scontent.xx.fbcdn.net/v/t1.0-1/p320x320/15085688_10155160021221490_1969440978709319667_n.jpg?_nc_cat=108&_nc_ohc=FSm-Bdcm1_4AX_at_et&_nc_ht=scontent.xx&_nc_tp=6&oh=a679edb586c6a54e2409e4cd6c7fe5f2&oe=5EC933A5",
            width: null
          }
        ],
        product: "premium",
        type: "user",
        uri: "spotify:user:stanleymeowskers"
      }
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
              <div id="homedash" className="homedash">
                <div className="item-b">
                  <RecentlyPlayed
                    key="recentlyplayed"
                    id="recentlyplayed"
                    access_token={access_token}
                  />
                </div>
                <div className="item-a">
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
