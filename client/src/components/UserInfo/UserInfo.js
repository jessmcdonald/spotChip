import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./UserInfo.css";
import nowPlayingIcon from "../../img/playing.png";
import playPause from "../../img/pause-play-button.png";

import { currentlyPlaying, following } from "../mockData";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //currentlyPlaying: currentlyPlaying,
      //following: following
      following: null
    };
  }

  componentDidMount() {
    this.props.getCurrentlyPlaying();
    this.getFollowingArtists();
  }

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

          {this.props.currentlyPlaying ? (
            <div className="currentlyPlaying">
              <img src={nowPlayingIcon} className="nowPlayingIcon" />
              {this.props.currentlyPlaying.item.name} -{" "}
              {this.props.currentlyPlaying.item.album.artists[0].name}
            </div>
          ) : (
            <div></div>
          )}

          {/* <div className="trackPlayer">
            <button className="playerButton">
              <img src={playPause} className="playerImg" />
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default UserInfo;
