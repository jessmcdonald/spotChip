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
        this.setState({ recentlyPlayed: response.data });
        console.log(this.state.recentlyPlayed);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return <div className="RecentlyPlayed">List</div>;
  }
}

export default RecentlyPlayed;
