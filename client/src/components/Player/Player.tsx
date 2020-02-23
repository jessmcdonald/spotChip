import React from "react";

import axios from "axios";


interface ISpotifyPlayerProps {
    playingRecordingId: string;
}

class Player extends React.Component {
   public constructor(props: ISpotifyPlayerProps) {
        super(props);
    
        new ScriptCache([
            {
                name: "https://sdk.scdn.co/spotify-player.js",
                callback: this.spotifySDKCallback
            }]);
    
       }

    
    private spotifySDKCallback = () => {
        window.onSpotifyWebPlaybackSDKReady = () => {

            if (this.state.spotifyAccess !== SpotifyAccess.DENIED) {
                const spotifyPlayer = new Spotify.Player({
                    name: 'React Spotify Player',
                    getOAuthToken: cb => {
                        cb(this.state.spotifyAccessToken);
                    }
                });

                // Playback status updates
                spotifyPlayer.addListener('player_state_changed', state => {
                    console.log(state);
                });


                this.setState({
                    loadingState: "spotify scripts loaded",
                    spotifyPlayer
                });

            } else {
                this.setState({loadingState: "spotify authorization rejected"});
            }
        }

    }

  render() {
    return ()}}