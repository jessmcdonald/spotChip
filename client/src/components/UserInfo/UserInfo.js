import React from "react";
import axios from "axios";
import "./UserInfo.css";
import nowPlayingIcon from "../../img/playing.png";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyPlaying: null
    };
  }

  componentDidMount() {
    this.getCurrentlyPlaying();
  }

  getCurrentlyPlaying = () => {
    let access_token = this.props.access_token;
    axios
      .get("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: { Authorization: `Bearer ${access_token}` }
      })
      .then(response => {
        this.setState({ currentlyPlaying: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="UserProfile">
        <img className="ProfileImg" src={this.props.user.images[0].url} />
        <p>{this.props.user.display_name}</p>
        <p>Followers</p>
        {this.props.user.followers.total}
        {this.state.currentlyPlaying ? (
          <div className="currentlyPlaying">
            <img src={nowPlayingIcon} className="nowPlayingIcon" />
            Currently Playing: {this.state.currentlyPlaying.item.name} -{" "}
            {this.state.currentlyPlaying.item.album.artists[0].name}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default UserInfo;
