import React from "react";
import axios from "axios";

import "./TopTracksArtists.css";

class TopTracksArtists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRange: "short_term",
      topArtists: null
    };
  }

  setTimeRange(e, callback) {
    this.setState({ timeRange: e.target.id }).then(callback);
  }

  getTopArtists = () => {
    let access_token = this.props.access_token;
    axios
      .get("https://api.spotify.com/v1/me/top/artists", {
        headers: { Authorization: `Bearer ${access_token}` },
        params: { limit: 50, time_range: this.state.timeRange }
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
        <div className="TopTracks">
          <h2>Top Tracks</h2>
        </div>
        <div>
          <h2>Top Artists</h2>
          <div className="ArtistsGrid">
            <div>
              <button
                id="short_term"
                onClick={e => this.setTimeRange(e, this.getTopArtists)}
              >
                last month
              </button>
              <button
                id="medium_term"
                onClick={e => this.setTimeRange(e, this.getTopArtists)}
              >
                last 6 months
              </button>
              <button
                id="long_term"
                onClick={e => this.setTimeRange(e, this.getTopArtists)}
              >
                ever
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopTracksArtists;
