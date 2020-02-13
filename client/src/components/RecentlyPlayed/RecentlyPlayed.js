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
                <td className="tablenumber">{i + 1}</td>
                <td>
                  <img
                    className="playlistImg"
                    src={item.track.album.images[0].url}
                  />
                </td>
                <td>{item.track.name}</td>
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
