import React from "react";
import axios from "axios";

import "./TopTracksArtists.css";

import { topArtistsLimited } from "../mockData";

class TopTracksArtists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRange: "short_term",
      topArtists: null
      //topArtists: topArtistsLimited
    };
  }

  setTimeRange = e => {
    this.setState({ timeRange: e.target.id }, () => {
      this.getTopArtists();
      console.log(this.state.timeRange);
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
        console.log(this.state.topArtists);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {}

  render() {
    return (
      <div className="TopTracksArtists">
        <div className="TopTracks item-x">
          <h2>Top Tracks</h2>
        </div>
        <div className="TopArtists item-y">
          <h2>Top Artists</h2>
          <div className="ArtistsSection">
            <div>
              <button id="short_term" onClick={e => this.setTimeRange(e)}>
                last month
              </button>
              <button id="medium_term" onClick={e => this.setTimeRange(e)}>
                last 6 months
              </button>
              <button id="long_term" onClick={e => this.setTimeRange(e)}>
                ever
              </button>
              {this.state.topArtists ? (
                <div className="artistsGrid">
                  {this.state.topArtists.items.map(item => (
                    <div className="artistBox">
                      <img className="artistImg" src={item.images[0].url} />
                      <p className="artistName">{item.name}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div>oh no no top artists</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopTracksArtists;
