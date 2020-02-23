import React from "react";
import axios from "axios";
import "./PlaylistInfo.css";

import { playlists } from "../mockData";

class PlaylistInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: null
    };
  }

  componentDidMount() {
    this.setState({ playlist: this.props.location.state }, () => {
      console.log(this.state.playlist);
    });
  }

  render() {
    return (
      <div className="playlistInfo">
        {this.state.playlist ? (
          <h2>{this.state.playlist.playlist.item.name}</h2>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default PlaylistInfo;
