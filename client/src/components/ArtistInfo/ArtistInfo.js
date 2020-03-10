import React from "react";
import axios from "axios";

import "./ArtistInfo.css";

class ArtistInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { artist: null, albums: null };
  }

  getArtistAlbums = () => {
    let access_token = this.state.access_token.access_token;
    console.log(access_token);
    axios
      .get(
        `https://api.spotify.com/v1/artists/${this.state.artist.artist.item.id}/albums`,
        {
          headers: { Authorization: `Bearer ${access_token}` }
        }
      )
      .then(response => {
        this.setState({ albums: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {
    this.setState({ access_token: this.props.location.state }, () => {
      console.log(this.state.access_token);
    });
    this.setState({ artist: this.props.location.state }, () => {
      console.log(this.state.artist);
      this.getArtistAlbums();
    });
  }

  render() {
    return (
      <div className="ArtistProfile">
        {this.state.artist ? (
          <div className="ArtistPage">
            <h2>{this.state.artist.artist.item.name}</h2>
            <img
              src={this.state.artist.artist.item.images[0].url}
              className="ArtistProfileImg"
            />

            <div className="artistFollowers">
              <p className="artistFollowersTitle">Followers</p>
              <p className="artistFollowerCount">
                {this.state.artist.artist.item.followers.total}
              </p>
            </div>

            {this.state.albums ? (
              <div className="Albums">
                {this.state.albums.items.map(item => (
                  <div className="Album">
                    <img src={item.images[0].url} className="AlbumCover" />
                    {item.name}
                  </div>
                ))}
              </div>
            ) : (
              <div>no albums!</div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default ArtistInfo;
