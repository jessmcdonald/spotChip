import React from "react";
import axios from "axios";
import "./RecentGenres.css";
import { RecentGenresChart } from "../RecentGenresChart/RecentGenresChart";

import { topArtists } from "../mockData";

//chart data
const data = [
  {
    name: "sad core",
    size: 100
  },
  {
    name: "anti folk",
    size: 600
  },
  {
    name: "slow core",
    size: 300
  },
  {
    name: "indie rock",
    size: 400
  },
  {
    name: "sad rock",
    size: 300
  }
];
const COLORS = ["#1db954", "#22db63", "#b91d82", "#e141a9", "#e17a41"];

class RecentGenres extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topArtists: topArtists,
      genreArray: null
    };
  }

  componentDidMount() {
    //this.getTopArtists();
    this.getGenreData();
  }

  getGenreData = () => {
    let newArray = [];
    this.state.topArtists.items.map(item => newArray.push(item.genres));
    let genreArray = [].concat.apply([], newArray);
    let newGenresArray = this.compressGenreArray(genreArray);
    console.log(
      newGenresArray.sort((a, b) => (a.size > b.size ? 1 : -1)).reverse()
    );
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

  //   getTopArtists = () => {
  //     let access_token = this.props.access_token;
  //     axios
  //       .get("https://api.spotify.com/v1/me/playlists", {
  //         headers: { Authorization: `Bearer ${access_token}` },
  //         params: { limit: 50 }
  //       })
  //       .then(response => {
  //         this.setState({ topArtists: response.data });
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   };

  render() {
    return (
      <div>
        <h2>Recent Genres</h2>
      </div>
    );
  }
}

export default RecentGenres;
