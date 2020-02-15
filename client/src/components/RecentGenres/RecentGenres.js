import React from "react";
import axios from "axios";
import "./RecentGenres.css";
import RecentGenresChart from "../RecentGenresChart/RecentGenresChart";

import { topArtists } from "../mockData";

class RecentGenres extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //topArtists: topArtists,
      topArtists: null,
      genreArray: null
    };
  }

  componentDidMount() {
    this.getTopArtists();
    this.getGenreData();
  }

  getTopArtists = () => {
    let access_token = this.props.access_token;
    axios
      .get("https://api.spotify.com/v1/me/top/artists", {
        headers: { Authorization: `Bearer ${access_token}` },
        params: { limit: 50 }
      })
      .then(response => {
        this.setState({ topArtists: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  compressGenreArray = original => {
    var compressed = [];
    var copy = original.slice(0);
    for (var i = 0; i < original.length; i++) {
      var genreCount = 0;
      for (var j = 0; j < copy.length; j++) {
        if (original[i] == copy[j]) {
          genreCount++;
          delete copy[j];
        }
      }
      if (genreCount > 0) {
        var a = new Object();
        a.name = original[i];
        a.size = genreCount;
        compressed.push(a);
      }
    }
    return compressed;
  };

  getGenreData = () => {
    let newArray = [];
    this.state.topArtists.items.map(item => newArray.push(item.genres));
    let genreArray = [].concat.apply([], newArray);
    let newGenresArray = this.compressGenreArray(genreArray);
    this.setState({
      genreArray: newGenresArray
        .sort((a, b) => (a.size > b.size ? 1 : -1))
        .reverse()
    });
  };

  render() {
    return (
      <div>
        {this.state.genreArray ? (
          <div>
            <h2>Recent Genres</h2>
            <RecentGenresChart data={this.state.genreArray} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default RecentGenres;
