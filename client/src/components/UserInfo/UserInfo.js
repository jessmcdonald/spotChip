import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./UserInfo.css";
import nowPlayingIcon from "../../img/playing.png";

import { currentlyPlaying, following } from "../mockData";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //   currentlyPlaying: currentlyPlaying,
      //   following: following
      currentlyPlaying: null,
      following: null
    };
  }

  componentDidMount() {
    this.getCurrentlyPlaying();
    this.getFollowingArtists();
  }

  getCurrentlyPlaying = () => {
    let access_token = this.props.access_token;
    axios
      .get("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: { Authorization: `Bearer ${access_token}` }
      })
      .then(response => {
        this.setState({ currentlyPlaying: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getFollowingArtists = () => {
    let access_token = this.props.access_token;
    axios
      .get("https://api.spotify.com/v1/me/following", {
        headers: { Authorization: `Bearer ${access_token}` },
        params: {
          type: "artist"
        }
      })
      .then(response => {
        this.setState({ following: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="UserProfile">
        <div className="UPInfoSection">
          <div className="UPItem">
            <img className="ProfileImg" src={this.props.user.images[0].url} />
          </div>

          <div className="displayInfo UPItem">
            <p className="displayName">{this.props.user.display_name}</p>
            <p className="displayId">id: {this.props.user.id}</p>
          </div>
          <div className="followering UPItem">
            <div className="followers">
              <p className="followersTitle">Followers</p>
              <p className="followerCount">{this.props.user.followers.total}</p>
            </div>
            <div className="following">
              <p className="followersTitle">Following</p>
              {this.state.following ? (
                <p className="followerCount">
                  {this.state.following.artists.items.length}
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>

          {this.state.currentlyPlaying ? (
            <div className="currentlyPlaying">
              <img src={nowPlayingIcon} className="nowPlayingIcon" />
              {this.state.currentlyPlaying.item.name} -{" "}
              {this.state.currentlyPlaying.item.album.artists[0].name}
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div class="nav-panel UPItem">
          <Link to="/">
            <button class="nav-button">Dashboard</button>
          </Link>
          <Link to="/toptracksartists">
            <button class="nav-button">Top Artists + Tracks</button>
          </Link>
          <Link to="/shows">
            <button class="nav-button">Find Shows</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default UserInfo;
