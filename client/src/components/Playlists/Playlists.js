import React from "react";
import axios from "axios";
import "./Playlists.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { playlists } from "../mockData";

class Playlists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //playlists: playlists
      playlists: null
    };
  }

  componentDidMount() {
    this.getPlaylists();
  }

  getPlaylists = () => {
    let access_token = this.props.access_token;
    axios
      .get("https://api.spotify.com/v1/me/playlists", {
        headers: { Authorization: `Bearer ${access_token}` },
        params: { limit: 20 }
      })
      .then(response => {
        this.setState({ playlists: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="playlists">
        {this.state.playlists ? (
          <div className="playlistSection">
            <h2>Playlists</h2>
            <div className="playlistGrid">
              {this.state.playlists.items.map(item => (
                <Link
                  to={{
                    pathname: `/playlists/${item.name}`,
                    state: {
                      playlist: { item }
                    }
                  }}
                >
                  <img src={item.images[0].url} className="playlistCoverImg" />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Playlists;
