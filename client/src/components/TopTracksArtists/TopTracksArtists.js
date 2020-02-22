import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./TopTracksArtists.css";

import ArtistInfo from "../ArtistInfo/ArtistInfo";

import { topArtistsLimited, recentlyPlayed } from "../mockData";

class TopTracksArtists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRange: "short_term",
      timeRangeTracks: "short_term",
      topArtists: null,
      topTracks: null
      //topArtists: topArtistsLimited,
      //topTracks: recentlyPlayed
    };
  }

  componentDidMount() {
    this.getTopArtists();
    this.getTopTracks();
  }

  setTimeRange = e => {
    this.setState({ timeRange: e.target.id }, () => {
      this.getTopArtists();
      //console.log(this.state.timeRange);
    });
  };

  setTimeRangeTracks = e => {
    this.setState({ timeRangeTracks: e.target.id }, () => {
      this.getTopTracks();
      //console.log(this.state.timeRangeTracks);
    });
  };

  getTopArtists = () => {
    let access_token = this.props.access_token;
    axios
      .get("https://api.spotify.com/v1/me/top/artists", {
        headers: { Authorization: `Bearer ${access_token}` },
        params: { limit: 16, time_range: this.state.timeRange }
      })
      .then(response => {
        this.setState({ topArtists: response.data });
        //console.log(this.state.topArtists);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getTopTracks = () => {
    let access_token = this.props.access_token;
    axios
      .get("https://api.spotify.com/v1/me/top/tracks", {
        headers: { Authorization: `Bearer ${access_token}` },
        params: { limit: 15, time_range: this.state.timeRangeTracks }
      })
      .then(response => {
        this.setState({ topTracks: response.data });
        //console.log(this.state.topTracks);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  playTrack = (item, getCurrentlyPlaying) => {
    let access_token = this.props.access_token;
    const url = "https://api.spotify.com/v1/me/player/play";
    //console.log(access_token);
    axios({
      method: "PUT",
      url: url,
      data: { uris: [item.uri] },
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
      <div className="TopTracksArtists">
        <div className="TopTracks item-x">
          <h2>Top Tracks</h2>
          <div className="TracksSection">
            <div className="timeFrameButtons">
              <button
                className="timeFrameButton"
                id="short_term"
                onClick={e => this.setTimeRangeTracks(e)}
              >
                last month
              </button>
              <button
                className="timeFrameButton"
                id="medium_term"
                onClick={e => this.setTimeRangeTracks(e)}
              >
                last 6 months
              </button>
              <button
                className="timeFrameButton"
                id="long_term"
                onClick={e => this.setTimeRangeTracks(e)}
              >
                ever
              </button>
            </div>
            {this.state.topTracks ? (
              <table width="100%" className="topTracksTable">
                <tr>
                  <th className="tablenumber" width="10%">
                    #
                  </th>
                  <th width="10%"></th>
                  <th width="45%">Track</th>
                  <th width="35%">Artist</th>
                </tr>

                {this.state.topTracks.items.map((item, i) => (
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
                        src={item.album.images[0].url}
                      />
                    </td>
                    <td
                      className="trackName"
                      onClick={() =>
                        this.playTrack(item, this.props.getCurrentlyPlaying)
                      }
                    >
                      {item.name}
                    </td>
                    <td>{item.artists[0].name}</td>
                  </tr>
                ))}
              </table>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="TopArtists item-y">
          <h2>Top Artists</h2>
          <div className="ArtistsSection">
            <div className="timeFrameButtons">
              <button
                className="timeFrameButton"
                id="short_term"
                onClick={e => this.setTimeRange(e)}
              >
                last month
              </button>
              <button
                className="timeFrameButton"
                id="medium_term"
                onClick={e => this.setTimeRange(e)}
              >
                last 6 months
              </button>
              <button
                className="timeFrameButton"
                id="long_term"
                onClick={e => this.setTimeRange(e)}
              >
                ever
              </button>
            </div>
            {this.state.topArtists ? (
              <div className="artistsGrid">
                {this.state.topArtists.items.map(item => (
                  <div className="artistBox">
                    <Link
                      to={{
                        pathname: `/artists/${item.name}`,
                        state: {
                          artist: { item }
                        }
                      }}
                    >
                      <img className="artistImg" src={item.images[0].url} />
                      <p className="artistName">{item.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div>oh no no top artists</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TopTracksArtists;
