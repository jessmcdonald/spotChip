import React from "react";
import axios from "axios";

import "./ArtistInfo.css";

class ArtistInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //TODO
  //check if can get more detailed artist info with axios request

  componentDidMount() {
    console.log(props.location.state.artist);
    console.log(props.location.state);
  }

  render() {
    return (
      <div className="ArtistProfile">
        <h2>{props.location.state.artist.name}</h2>
        <img src="artistname" className="ArtistProfileImg" />
        <div className="ArtistFollowers">
          Followers: {this.props.followers.total}
        </div>
        <div className="ArtistTopTracks">
          <table width="100%" className="topTracksTable">
            <tr>
              <th className="tablenumber" width="10%">
                #
              </th>
              <th width="10%"></th>
              <th width="45%">Track</th>
              <th width="35%">Artist</th>
            </tr>
            //TODO
            {this.props.artist.toptracks.map((item, i) => (
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
                    this.playTrack(item, this.props.getCurrentlyPlaying)
                  }
                >
                  {item.track.name}
                </td>
                <td>{item.track.artists[0].name}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="Albums">
          {this.props.artist.albums.map(item => (
            <div className="Album">
              <img src={item.images[0].url} className="AlbumCover" />
              <div className="AlbumTracklist">//TODO</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ArtistInfo;
