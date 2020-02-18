import React from "react";
import "./HomeDashboard.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RecentlyPlayed from "../RecentlyPlayed/RecentlyPlayed";
import Playlists from "../Playlists/Playlists";
import RecentGenres from "../RecentGenres/RecentGenres";

class HomeDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyPlaying: null
    };
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="item-d">
          <RecentlyPlayed
            key="recentlyplayed"
            id="recentlyplayed"
            access_token={this.props.access_token}
            getCurrentlyPlaying={this.props.getCurrentlyPlaying}
          />
        </div>
        <div className="item-e">
          <Playlists
            key="playlistsgrid"
            id="playlistsgrid"
            access_token={this.props.access_token}
          />
        </div>
        <div className="item-f">
          <RecentGenres
            key="recentgenreschart"
            id="recentgenreschart"
            access_token={this.props.access_token}
          />
        </div>
      </div>
    );
  }
}

export default HomeDashboard;
