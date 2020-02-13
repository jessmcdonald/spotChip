import React from "react";
import axios from "axios";
import "./UserInfo.css";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
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
        console.log(this.state.currentlyPlaying);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="UserProfile">
        <img className="ProfileImg" src={this.props.user.images[0].url} />
        {this.props.user.display_name}
      </div>
    );
  }
}

export default UserInfo;
