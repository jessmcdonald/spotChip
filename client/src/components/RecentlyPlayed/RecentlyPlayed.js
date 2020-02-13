import React from "react";
import axios from "axios";
import "./RecentlyPlayed.css";

class RecentlyPlayed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        console.log(this.state.recentlyPlayed);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="RecentlyPlayed">
        {this.state.recentlyPlayed ? (
          <ol>
            {this.state.recentlyPlayed.map(item => (
              <li>
                {item.track.name} - {item.track.artists[0].name} -{" "}
                {item.track.album.name}
              </li>
            ))}
          </ol>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default RecentlyPlayed;
