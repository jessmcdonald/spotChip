import React from "react";
import axios from "axios";
import "./RecentlyPlayed.css";

import { recentlyPlayed } from "../mockData";

class RecentlyPlayed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //recentlyPlayed: recentlyPlayed
      recentlyPlayed: null
    };
  }

  componentDidMount() {
    this.getRecentlyPlayed();
  }

  getRecentlyPlayed = () => {
    let access_token = this.props.access_token;
    axios
      .get("https://api.spotify.com/v1/me/player/recently-played", {
        headers: { Authorization: `Bearer ${access_token}` },
        params: {
          limit: 10
        }
      })
      .then(response => {
        this.setState({ recentlyPlayed: response.data.items });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  playTrack = (item, getCurrentlyPlaying) => {
    let access_token = this.props.access_token;
    const url = "https://api.spotify.com/v1/me/player/play";
    console.log(access_token);
    axios({
      method: "PUT",
      url: url,
      data: { uris: [item.track.uri] },
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        getCurrentlyPlaying();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="RecentlyPlayed">
        <h2>Recently Played</h2>
        {this.state.recentlyPlayed ? (
          <table width="100%" className="recentlyPlayedTable">
            <tr>
              <th className="tablenumber" width="10%">
                #
              </th>
              <th width="10%"></th>
              <th width="45%">Track</th>
              <th width="35%">Artist</th>
            </tr>

            {this.state.recentlyPlayed.map((item, i) => (
              <tr className="tr">
                <td
                  className="tablenumber"
                  onClick={() =>
                    this.playTrack(item, this.props.getCurrentlyPlaying)
                  }
                >
                  {i + 1}
                </td>
                <td>
                  <img
                    className="playlistImg"
                    src={item.track.album.images[0].url}
                  />
                </td>
                <td
                  className="trackName"
                  onClick={() =>
                    this.playTrack(item, () => {
                      this.props.getCurrentlyPlaying();
                    })
                  }
                >
                  {item.track.name}
                </td>
                <td>{item.track.artists[0].name}</td>
              </tr>
            ))}
          </table>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default RecentlyPlayed;
