import React from "react";
import "./TopTracksArtists.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RecentlyPlayed from "../RecentlyPlayed/RecentlyPlayed";
import Playlists from "../Playlists/Playlists";
import RecentGenres from "../RecentGenres/RecentGenres";

class TopTracksArtists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>find shows</h2>
      </div>
    );
  }
}

export default TopTracksArtists;
