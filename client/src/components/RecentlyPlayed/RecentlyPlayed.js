import React from "react";
import axios from "axios";
import "./RecentlyPlayed.css";

class RecentlyPlayed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recentlyPlayed: [
        {
          track: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify:
                      "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
                  },
                  href:
                    "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
                  id: "5o206eFLx38glA2bb4zqIU",
                  name: "Bright Eyes",
                  type: "artist",
                  uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
                }
              ],
              available_markets: [
                "AD",
                "AE",
                "AR",
                "AT",
                "AU",
                "BE",
                "BG",
                "BH",
                "BO",
                "BR",
                "CA",
                "CH",
                "CL",
                "CO",
                "CR",
                "CY",
                "CZ",
                "DE",
                "DK",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "ES",
                "FI",
                "FR",
                "GB",
                "GR",
                "GT",
                "HK",
                "HN",
                "HU",
                "ID",
                "IE",
                "IL",
                "IN",
                "IS",
                "IT",
                "JO",
                "JP",
                "KW",
                "LB",
                "LI",
                "LT",
                "LU",
                "LV",
                "MA",
                "MC",
                "MT",
                "MX",
                "MY",
                "NI",
                "NL",
                "NO",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PH",
                "PL",
                "PS",
                "PT",
                "PY",
                "QA",
                "RO",
                "SA",
                "SE",
                "SG",
                "SK",
                "SV",
                "TH",
                "TN",
                "TR",
                "TW",
                "US",
                "UY",
                "VN",
                "ZA"
              ],
              external_urls: {
                spotify: "https://open.spotify.com/album/69uTyNumTCoUWD1qvfoMNb"
              },
              href: "https://api.spotify.com/v1/albums/69uTyNumTCoUWD1qvfoMNb",
              id: "69uTyNumTCoUWD1qvfoMNb",
              images: [
                {
                  height: 640,
                  url:
                    "https://i.scdn.co/image/ab67616d0000b2737d3b5da53f1e3d3953cc54be",
                  width: 640
                },
                {
                  height: 300,
                  url:
                    "https://i.scdn.co/image/ab67616d00001e027d3b5da53f1e3d3953cc54be",
                  width: 300
                },
                {
                  height: 64,
                  url:
                    "https://i.scdn.co/image/ab67616d000048517d3b5da53f1e3d3953cc54be",
                  width: 64
                }
              ],
              name: "Digital Ash In A Digital Urn",
              release_date: "2005-01-25",
              release_date_precision: "day",
              total_tracks: 12,
              type: "album",
              uri: "spotify:album:69uTyNumTCoUWD1qvfoMNb"
            },
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
                },
                href:
                  "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
                id: "5o206eFLx38glA2bb4zqIU",
                name: "Bright Eyes",
                type: "artist",
                uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
              }
            ],
            available_markets: [
              "AD",
              "AE",
              "AR",
              "AT",
              "AU",
              "BE",
              "BG",
              "BH",
              "BO",
              "BR",
              "CA",
              "CH",
              "CL",
              "CO",
              "CR",
              "CY",
              "CZ",
              "DE",
              "DK",
              "DO",
              "DZ",
              "EC",
              "EE",
              "EG",
              "ES",
              "FI",
              "FR",
              "GB",
              "GR",
              "GT",
              "HK",
              "HN",
              "HU",
              "ID",
              "IE",
              "IL",
              "IN",
              "IS",
              "IT",
              "JO",
              "JP",
              "KW",
              "LB",
              "LI",
              "LT",
              "LU",
              "LV",
              "MA",
              "MC",
              "MT",
              "MX",
              "MY",
              "NI",
              "NL",
              "NO",
              "NZ",
              "OM",
              "PA",
              "PE",
              "PH",
              "PL",
              "PS",
              "PT",
              "PY",
              "QA",
              "RO",
              "SA",
              "SE",
              "SG",
              "SK",
              "SV",
              "TH",
              "TN",
              "TR",
              "TW",
              "US",
              "UY",
              "VN",
              "ZA"
            ],
            disc_number: 1,
            duration_ms: 246533,
            explicit: false,
            external_ids: {
              isrc: "US2U60507308"
            },
            external_urls: {
              spotify: "https://open.spotify.com/track/6MEVI1jiimXCYqBfWa2yHq"
            },
            href: "https://api.spotify.com/v1/tracks/6MEVI1jiimXCYqBfWa2yHq",
            id: "6MEVI1jiimXCYqBfWa2yHq",
            is_local: false,
            name: "Devil In The Details",
            popularity: 24,
            preview_url:
              "https://p.scdn.co/mp3-preview/8d22a5bb13b0824947a32baa70f356fae6f96f6b?cid=774b29d4f13844c495f206cafdad9c86",
            track_number: 8,
            type: "track",
            uri: "spotify:track:6MEVI1jiimXCYqBfWa2yHq"
          },
          played_at: "2020-02-13T14:41:12.783Z",
          context: {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
            },
            href: "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
            type: "artist",
            uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
          }
        },
        {
          track: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify:
                      "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
                  },
                  href:
                    "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
                  id: "5o206eFLx38glA2bb4zqIU",
                  name: "Bright Eyes",
                  type: "artist",
                  uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
                }
              ],
              available_markets: [
                "AD",
                "AE",
                "AR",
                "AT",
                "AU",
                "BE",
                "BG",
                "BH",
                "BO",
                "BR",
                "CA",
                "CH",
                "CL",
                "CO",
                "CR",
                "CY",
                "CZ",
                "DE",
                "DK",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "ES",
                "FI",
                "FR",
                "GB",
                "GR",
                "GT",
                "HK",
                "HN",
                "HU",
                "ID",
                "IE",
                "IL",
                "IN",
                "IS",
                "IT",
                "JO",
                "JP",
                "KW",
                "LB",
                "LI",
                "LT",
                "LU",
                "LV",
                "MA",
                "MC",
                "MT",
                "MX",
                "MY",
                "NI",
                "NL",
                "NO",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PH",
                "PL",
                "PS",
                "PT",
                "PY",
                "QA",
                "RO",
                "SA",
                "SE",
                "SG",
                "SK",
                "SV",
                "TH",
                "TN",
                "TR",
                "TW",
                "US",
                "UY",
                "VN",
                "ZA"
              ],
              external_urls: {
                spotify: "https://open.spotify.com/album/69uTyNumTCoUWD1qvfoMNb"
              },
              href: "https://api.spotify.com/v1/albums/69uTyNumTCoUWD1qvfoMNb",
              id: "69uTyNumTCoUWD1qvfoMNb",
              images: [
                {
                  height: 640,
                  url:
                    "https://i.scdn.co/image/ab67616d0000b2737d3b5da53f1e3d3953cc54be",
                  width: 640
                },
                {
                  height: 300,
                  url:
                    "https://i.scdn.co/image/ab67616d00001e027d3b5da53f1e3d3953cc54be",
                  width: 300
                },
                {
                  height: 64,
                  url:
                    "https://i.scdn.co/image/ab67616d000048517d3b5da53f1e3d3953cc54be",
                  width: 64
                }
              ],
              name: "Digital Ash In A Digital Urn",
              release_date: "2005-01-25",
              release_date_precision: "day",
              total_tracks: 12,
              type: "album",
              uri: "spotify:album:69uTyNumTCoUWD1qvfoMNb"
            },
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
                },
                href:
                  "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
                id: "5o206eFLx38glA2bb4zqIU",
                name: "Bright Eyes",
                type: "artist",
                uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
              }
            ],
            available_markets: [
              "AD",
              "AE",
              "AR",
              "AT",
              "AU",
              "BE",
              "BG",
              "BH",
              "BO",
              "BR",
              "CA",
              "CH",
              "CL",
              "CO",
              "CR",
              "CY",
              "CZ",
              "DE",
              "DK",
              "DO",
              "DZ",
              "EC",
              "EE",
              "EG",
              "ES",
              "FI",
              "FR",
              "GB",
              "GR",
              "GT",
              "HK",
              "HN",
              "HU",
              "ID",
              "IE",
              "IL",
              "IN",
              "IS",
              "IT",
              "JO",
              "JP",
              "KW",
              "LB",
              "LI",
              "LT",
              "LU",
              "LV",
              "MA",
              "MC",
              "MT",
              "MX",
              "MY",
              "NI",
              "NL",
              "NO",
              "NZ",
              "OM",
              "PA",
              "PE",
              "PH",
              "PL",
              "PS",
              "PT",
              "PY",
              "QA",
              "RO",
              "SA",
              "SE",
              "SG",
              "SK",
              "SV",
              "TH",
              "TN",
              "TR",
              "TW",
              "US",
              "UY",
              "VN",
              "ZA"
            ],
            disc_number: 1,
            duration_ms: 324840,
            explicit: false,
            external_ids: {
              isrc: "US2U60507307"
            },
            external_urls: {
              spotify: "https://open.spotify.com/track/4kc7i8om3PU8Wi5Mopi3TN"
            },
            href: "https://api.spotify.com/v1/tracks/4kc7i8om3PU8Wi5Mopi3TN",
            id: "4kc7i8om3PU8Wi5Mopi3TN",
            is_local: false,
            name: "I Believe In Symmetry",
            popularity: 32,
            preview_url:
              "https://p.scdn.co/mp3-preview/ec0b41be17be1df76afb24251c914b5354c4ec8d?cid=774b29d4f13844c495f206cafdad9c86",
            track_number: 7,
            type: "track",
            uri: "spotify:track:4kc7i8om3PU8Wi5Mopi3TN"
          },
          played_at: "2020-02-13T14:37:06.260Z",
          context: {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
            },
            href: "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
            type: "artist",
            uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
          }
        },
        {
          track: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify:
                      "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
                  },
                  href:
                    "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
                  id: "5o206eFLx38glA2bb4zqIU",
                  name: "Bright Eyes",
                  type: "artist",
                  uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
                }
              ],
              available_markets: [
                "AD",
                "AE",
                "AR",
                "AT",
                "AU",
                "BE",
                "BG",
                "BH",
                "BO",
                "BR",
                "CA",
                "CH",
                "CL",
                "CO",
                "CR",
                "CY",
                "CZ",
                "DE",
                "DK",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "ES",
                "FI",
                "FR",
                "GB",
                "GR",
                "GT",
                "HK",
                "HN",
                "HU",
                "ID",
                "IE",
                "IL",
                "IN",
                "IS",
                "IT",
                "JO",
                "JP",
                "KW",
                "LB",
                "LI",
                "LT",
                "LU",
                "LV",
                "MA",
                "MC",
                "MT",
                "MX",
                "MY",
                "NI",
                "NL",
                "NO",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PH",
                "PL",
                "PS",
                "PT",
                "PY",
                "QA",
                "RO",
                "SA",
                "SE",
                "SG",
                "SK",
                "SV",
                "TH",
                "TN",
                "TR",
                "TW",
                "US",
                "UY",
                "VN",
                "ZA"
              ],
              external_urls: {
                spotify: "https://open.spotify.com/album/69uTyNumTCoUWD1qvfoMNb"
              },
              href: "https://api.spotify.com/v1/albums/69uTyNumTCoUWD1qvfoMNb",
              id: "69uTyNumTCoUWD1qvfoMNb",
              images: [
                {
                  height: 640,
                  url:
                    "https://i.scdn.co/image/ab67616d0000b2737d3b5da53f1e3d3953cc54be",
                  width: 640
                },
                {
                  height: 300,
                  url:
                    "https://i.scdn.co/image/ab67616d00001e027d3b5da53f1e3d3953cc54be",
                  width: 300
                },
                {
                  height: 64,
                  url:
                    "https://i.scdn.co/image/ab67616d000048517d3b5da53f1e3d3953cc54be",
                  width: 64
                }
              ],
              name: "Digital Ash In A Digital Urn",
              release_date: "2005-01-25",
              release_date_precision: "day",
              total_tracks: 12,
              type: "album",
              uri: "spotify:album:69uTyNumTCoUWD1qvfoMNb"
            },
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
                },
                href:
                  "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
                id: "5o206eFLx38glA2bb4zqIU",
                name: "Bright Eyes",
                type: "artist",
                uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
              }
            ],
            available_markets: [
              "AD",
              "AE",
              "AR",
              "AT",
              "AU",
              "BE",
              "BG",
              "BH",
              "BO",
              "BR",
              "CA",
              "CH",
              "CL",
              "CO",
              "CR",
              "CY",
              "CZ",
              "DE",
              "DK",
              "DO",
              "DZ",
              "EC",
              "EE",
              "EG",
              "ES",
              "FI",
              "FR",
              "GB",
              "GR",
              "GT",
              "HK",
              "HN",
              "HU",
              "ID",
              "IE",
              "IL",
              "IN",
              "IS",
              "IT",
              "JO",
              "JP",
              "KW",
              "LB",
              "LI",
              "LT",
              "LU",
              "LV",
              "MA",
              "MC",
              "MT",
              "MX",
              "MY",
              "NI",
              "NL",
              "NO",
              "NZ",
              "OM",
              "PA",
              "PE",
              "PH",
              "PL",
              "PS",
              "PT",
              "PY",
              "QA",
              "RO",
              "SA",
              "SE",
              "SG",
              "SK",
              "SV",
              "TH",
              "TN",
              "TR",
              "TW",
              "US",
              "UY",
              "VN",
              "ZA"
            ],
            disc_number: 1,
            duration_ms: 287160,
            explicit: false,
            external_ids: {
              isrc: "US2U60507306"
            },
            external_urls: {
              spotify: "https://open.spotify.com/track/3qcLhrLDQgsUwzP05ZNl7j"
            },
            href: "https://api.spotify.com/v1/tracks/3qcLhrLDQgsUwzP05ZNl7j",
            id: "3qcLhrLDQgsUwzP05ZNl7j",
            is_local: false,
            name: "Hit The Switch",
            popularity: 32,
            preview_url:
              "https://p.scdn.co/mp3-preview/7eb3ca78badd45c18ddea5d49ed94cc897874e62?cid=774b29d4f13844c495f206cafdad9c86",
            track_number: 6,
            type: "track",
            uri: "spotify:track:3qcLhrLDQgsUwzP05ZNl7j"
          },
          played_at: "2020-02-13T14:31:41.340Z",
          context: {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
            },
            href: "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
            type: "artist",
            uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
          }
        },
        {
          track: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify:
                      "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
                  },
                  href:
                    "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
                  id: "5o206eFLx38glA2bb4zqIU",
                  name: "Bright Eyes",
                  type: "artist",
                  uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
                }
              ],
              available_markets: [
                "AD",
                "AE",
                "AR",
                "AT",
                "AU",
                "BE",
                "BG",
                "BH",
                "BO",
                "BR",
                "CA",
                "CH",
                "CL",
                "CO",
                "CR",
                "CY",
                "CZ",
                "DE",
                "DK",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "ES",
                "FI",
                "FR",
                "GB",
                "GR",
                "GT",
                "HK",
                "HN",
                "HU",
                "ID",
                "IE",
                "IL",
                "IN",
                "IS",
                "IT",
                "JO",
                "JP",
                "KW",
                "LB",
                "LI",
                "LT",
                "LU",
                "LV",
                "MA",
                "MC",
                "MT",
                "MX",
                "MY",
                "NI",
                "NL",
                "NO",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PH",
                "PL",
                "PS",
                "PT",
                "PY",
                "QA",
                "RO",
                "SA",
                "SE",
                "SG",
                "SK",
                "SV",
                "TH",
                "TN",
                "TR",
                "TW",
                "US",
                "UY",
                "VN",
                "ZA"
              ],
              external_urls: {
                spotify: "https://open.spotify.com/album/69uTyNumTCoUWD1qvfoMNb"
              },
              href: "https://api.spotify.com/v1/albums/69uTyNumTCoUWD1qvfoMNb",
              id: "69uTyNumTCoUWD1qvfoMNb",
              images: [
                {
                  height: 640,
                  url:
                    "https://i.scdn.co/image/ab67616d0000b2737d3b5da53f1e3d3953cc54be",
                  width: 640
                },
                {
                  height: 300,
                  url:
                    "https://i.scdn.co/image/ab67616d00001e027d3b5da53f1e3d3953cc54be",
                  width: 300
                },
                {
                  height: 64,
                  url:
                    "https://i.scdn.co/image/ab67616d000048517d3b5da53f1e3d3953cc54be",
                  width: 64
                }
              ],
              name: "Digital Ash In A Digital Urn",
              release_date: "2005-01-25",
              release_date_precision: "day",
              total_tracks: 12,
              type: "album",
              uri: "spotify:album:69uTyNumTCoUWD1qvfoMNb"
            },
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
                },
                href:
                  "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
                id: "5o206eFLx38glA2bb4zqIU",
                name: "Bright Eyes",
                type: "artist",
                uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
              }
            ],
            available_markets: [
              "AD",
              "AE",
              "AR",
              "AT",
              "AU",
              "BE",
              "BG",
              "BH",
              "BO",
              "BR",
              "CA",
              "CH",
              "CL",
              "CO",
              "CR",
              "CY",
              "CZ",
              "DE",
              "DK",
              "DO",
              "DZ",
              "EC",
              "EE",
              "EG",
              "ES",
              "FI",
              "FR",
              "GB",
              "GR",
              "GT",
              "HK",
              "HN",
              "HU",
              "ID",
              "IE",
              "IL",
              "IN",
              "IS",
              "IT",
              "JO",
              "JP",
              "KW",
              "LB",
              "LI",
              "LT",
              "LU",
              "LV",
              "MA",
              "MC",
              "MT",
              "MX",
              "MY",
              "NI",
              "NL",
              "NO",
              "NZ",
              "OM",
              "PA",
              "PE",
              "PH",
              "PL",
              "PS",
              "PT",
              "PY",
              "QA",
              "RO",
              "SA",
              "SE",
              "SG",
              "SK",
              "SV",
              "TH",
              "TN",
              "TR",
              "TW",
              "US",
              "UY",
              "VN",
              "ZA"
            ],
            disc_number: 1,
            duration_ms: 200733,
            explicit: false,
            external_ids: {
              isrc: "US2U60507305"
            },
            external_urls: {
              spotify: "https://open.spotify.com/track/20S8wTmjhGuapgIJwfT2LQ"
            },
            href: "https://api.spotify.com/v1/tracks/20S8wTmjhGuapgIJwfT2LQ",
            id: "20S8wTmjhGuapgIJwfT2LQ",
            is_local: false,
            name: "Take It Easy (Love Nothing)",
            popularity: 35,
            preview_url:
              "https://p.scdn.co/mp3-preview/0a8b5c4b666ea1fec934d82130fc8500bb0a081a?cid=774b29d4f13844c495f206cafdad9c86",
            track_number: 5,
            type: "track",
            uri: "spotify:track:20S8wTmjhGuapgIJwfT2LQ"
          },
          played_at: "2020-02-13T14:26:54.139Z",
          context: {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
            },
            href: "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
            type: "artist",
            uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
          }
        },
        {
          track: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify:
                      "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
                  },
                  href:
                    "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
                  id: "5o206eFLx38glA2bb4zqIU",
                  name: "Bright Eyes",
                  type: "artist",
                  uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
                }
              ],
              available_markets: [
                "AD",
                "AE",
                "AR",
                "AT",
                "AU",
                "BE",
                "BG",
                "BH",
                "BO",
                "BR",
                "CA",
                "CH",
                "CL",
                "CO",
                "CR",
                "CY",
                "CZ",
                "DE",
                "DK",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "ES",
                "FI",
                "FR",
                "GB",
                "GR",
                "GT",
                "HK",
                "HN",
                "HU",
                "ID",
                "IE",
                "IL",
                "IN",
                "IS",
                "IT",
                "JO",
                "JP",
                "KW",
                "LB",
                "LI",
                "LT",
                "LU",
                "LV",
                "MA",
                "MC",
                "MT",
                "MX",
                "MY",
                "NI",
                "NL",
                "NO",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PH",
                "PL",
                "PS",
                "PT",
                "PY",
                "QA",
                "RO",
                "SA",
                "SE",
                "SG",
                "SK",
                "SV",
                "TH",
                "TN",
                "TR",
                "TW",
                "US",
                "UY",
                "VN",
                "ZA"
              ],
              external_urls: {
                spotify: "https://open.spotify.com/album/69uTyNumTCoUWD1qvfoMNb"
              },
              href: "https://api.spotify.com/v1/albums/69uTyNumTCoUWD1qvfoMNb",
              id: "69uTyNumTCoUWD1qvfoMNb",
              images: [
                {
                  height: 640,
                  url:
                    "https://i.scdn.co/image/ab67616d0000b2737d3b5da53f1e3d3953cc54be",
                  width: 640
                },
                {
                  height: 300,
                  url:
                    "https://i.scdn.co/image/ab67616d00001e027d3b5da53f1e3d3953cc54be",
                  width: 300
                },
                {
                  height: 64,
                  url:
                    "https://i.scdn.co/image/ab67616d000048517d3b5da53f1e3d3953cc54be",
                  width: 64
                }
              ],
              name: "Digital Ash In A Digital Urn",
              release_date: "2005-01-25",
              release_date_precision: "day",
              total_tracks: 12,
              type: "album",
              uri: "spotify:album:69uTyNumTCoUWD1qvfoMNb"
            },
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
                },
                href:
                  "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
                id: "5o206eFLx38glA2bb4zqIU",
                name: "Bright Eyes",
                type: "artist",
                uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
              }
            ],
            available_markets: [
              "AD",
              "AE",
              "AR",
              "AT",
              "AU",
              "BE",
              "BG",
              "BH",
              "BO",
              "BR",
              "CA",
              "CH",
              "CL",
              "CO",
              "CR",
              "CY",
              "CZ",
              "DE",
              "DK",
              "DO",
              "DZ",
              "EC",
              "EE",
              "EG",
              "ES",
              "FI",
              "FR",
              "GB",
              "GR",
              "GT",
              "HK",
              "HN",
              "HU",
              "ID",
              "IE",
              "IL",
              "IN",
              "IS",
              "IT",
              "JO",
              "JP",
              "KW",
              "LB",
              "LI",
              "LT",
              "LU",
              "LV",
              "MA",
              "MC",
              "MT",
              "MX",
              "MY",
              "NI",
              "NL",
              "NO",
              "NZ",
              "OM",
              "PA",
              "PE",
              "PH",
              "PL",
              "PS",
              "PT",
              "PY",
              "QA",
              "RO",
              "SA",
              "SE",
              "SG",
              "SK",
              "SV",
              "TH",
              "TN",
              "TR",
              "TW",
              "US",
              "UY",
              "VN",
              "ZA"
            ],
            disc_number: 1,
            duration_ms: 273133,
            explicit: false,
            external_ids: {
              isrc: "US2U60507304"
            },
            external_urls: {
              spotify: "https://open.spotify.com/track/1o8D2Vqn537vxhVMMRav2V"
            },
            href: "https://api.spotify.com/v1/tracks/1o8D2Vqn537vxhVMMRav2V",
            id: "1o8D2Vqn537vxhVMMRav2V",
            is_local: false,
            name: "Down in a Rabbit Hole",
            popularity: 30,
            preview_url:
              "https://p.scdn.co/mp3-preview/d47bd1daceb1e84caba4fc4f0aee0c4a67314eb0?cid=774b29d4f13844c495f206cafdad9c86",
            track_number: 4,
            type: "track",
            uri: "spotify:track:1o8D2Vqn537vxhVMMRav2V"
          },
          played_at: "2020-02-13T14:23:33.400Z",
          context: {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
            },
            href: "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
            type: "artist",
            uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
          }
        },
        {
          track: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify:
                      "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
                  },
                  href:
                    "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
                  id: "5o206eFLx38glA2bb4zqIU",
                  name: "Bright Eyes",
                  type: "artist",
                  uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
                }
              ],
              available_markets: [
                "AD",
                "AE",
                "AR",
                "AT",
                "AU",
                "BE",
                "BG",
                "BH",
                "BO",
                "BR",
                "CA",
                "CH",
                "CL",
                "CO",
                "CR",
                "CY",
                "CZ",
                "DE",
                "DK",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "ES",
                "FI",
                "FR",
                "GB",
                "GR",
                "GT",
                "HK",
                "HN",
                "HU",
                "ID",
                "IE",
                "IL",
                "IN",
                "IS",
                "IT",
                "JO",
                "JP",
                "KW",
                "LB",
                "LI",
                "LT",
                "LU",
                "LV",
                "MA",
                "MC",
                "MT",
                "MX",
                "MY",
                "NI",
                "NL",
                "NO",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PH",
                "PL",
                "PS",
                "PT",
                "PY",
                "QA",
                "RO",
                "SA",
                "SE",
                "SG",
                "SK",
                "SV",
                "TH",
                "TN",
                "TR",
                "TW",
                "US",
                "UY",
                "VN",
                "ZA"
              ],
              external_urls: {
                spotify: "https://open.spotify.com/album/69uTyNumTCoUWD1qvfoMNb"
              },
              href: "https://api.spotify.com/v1/albums/69uTyNumTCoUWD1qvfoMNb",
              id: "69uTyNumTCoUWD1qvfoMNb",
              images: [
                {
                  height: 640,
                  url:
                    "https://i.scdn.co/image/ab67616d0000b2737d3b5da53f1e3d3953cc54be",
                  width: 640
                },
                {
                  height: 300,
                  url:
                    "https://i.scdn.co/image/ab67616d00001e027d3b5da53f1e3d3953cc54be",
                  width: 300
                },
                {
                  height: 64,
                  url:
                    "https://i.scdn.co/image/ab67616d000048517d3b5da53f1e3d3953cc54be",
                  width: 64
                }
              ],
              name: "Digital Ash In A Digital Urn",
              release_date: "2005-01-25",
              release_date_precision: "day",
              total_tracks: 12,
              type: "album",
              uri: "spotify:album:69uTyNumTCoUWD1qvfoMNb"
            },
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
                },
                href:
                  "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
                id: "5o206eFLx38glA2bb4zqIU",
                name: "Bright Eyes",
                type: "artist",
                uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
              }
            ],
            available_markets: [
              "AD",
              "AE",
              "AR",
              "AT",
              "AU",
              "BE",
              "BG",
              "BH",
              "BO",
              "BR",
              "CA",
              "CH",
              "CL",
              "CO",
              "CR",
              "CY",
              "CZ",
              "DE",
              "DK",
              "DO",
              "DZ",
              "EC",
              "EE",
              "EG",
              "ES",
              "FI",
              "FR",
              "GB",
              "GR",
              "GT",
              "HK",
              "HN",
              "HU",
              "ID",
              "IE",
              "IL",
              "IN",
              "IS",
              "IT",
              "JO",
              "JP",
              "KW",
              "LB",
              "LI",
              "LT",
              "LU",
              "LV",
              "MA",
              "MC",
              "MT",
              "MX",
              "MY",
              "NI",
              "NL",
              "NO",
              "NZ",
              "OM",
              "PA",
              "PE",
              "PH",
              "PL",
              "PS",
              "PT",
              "PY",
              "QA",
              "RO",
              "SA",
              "SE",
              "SG",
              "SK",
              "SV",
              "TH",
              "TN",
              "TR",
              "TW",
              "US",
              "UY",
              "VN",
              "ZA"
            ],
            disc_number: 1,
            duration_ms: 234333,
            explicit: false,
            external_ids: {
              isrc: "US2U60507303"
            },
            external_urls: {
              spotify: "https://open.spotify.com/track/5CwFVeAiDCoiYJBLjBQue0"
            },
            href: "https://api.spotify.com/v1/tracks/5CwFVeAiDCoiYJBLjBQue0",
            id: "5CwFVeAiDCoiYJBLjBQue0",
            is_local: false,
            name: "Arc Of Time (Time Code)",
            popularity: 29,
            preview_url:
              "https://p.scdn.co/mp3-preview/4835fd1fef3670a232c86403b35a1a4a18a3e8f9?cid=774b29d4f13844c495f206cafdad9c86",
            track_number: 3,
            type: "track",
            uri: "spotify:track:5CwFVeAiDCoiYJBLjBQue0"
          },
          played_at: "2020-02-13T14:19:00.380Z",
          context: {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5o206eFLx38glA2bb4zqIU"
            },
            href: "https://api.spotify.com/v1/artists/5o206eFLx38glA2bb4zqIU",
            type: "artist",
            uri: "spotify:artist:5o206eFLx38glA2bb4zqIU"
          }
        },
        {
          track: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify:
                      "https://open.spotify.com/artist/5XTn5Az9AcSKu0oaauC5ES"
                  },
                  href:
                    "https://api.spotify.com/v1/artists/5XTn5Az9AcSKu0oaauC5ES",
                  id: "5XTn5Az9AcSKu0oaauC5ES",
                  name: "quickly, quickly",
                  type: "artist",
                  uri: "spotify:artist:5XTn5Az9AcSKu0oaauC5ES"
                }
              ],
              available_markets: [
                "AD",
                "AE",
                "AR",
                "AT",
                "AU",
                "BE",
                "BG",
                "BH",
                "BO",
                "BR",
                "CA",
                "CH",
                "CL",
                "CO",
                "CR",
                "CY",
                "CZ",
                "DE",
                "DK",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "ES",
                "FI",
                "FR",
                "GB",
                "GR",
                "GT",
                "HK",
                "HN",
                "HU",
                "ID",
                "IE",
                "IL",
                "IN",
                "IS",
                "IT",
                "JO",
                "JP",
                "KW",
                "LB",
                "LI",
                "LT",
                "LU",
                "LV",
                "MA",
                "MC",
                "MT",
                "MX",
                "MY",
                "NI",
                "NL",
                "NO",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PH",
                "PL",
                "PS",
                "PT",
                "PY",
                "QA",
                "RO",
                "SA",
                "SE",
                "SG",
                "SK",
                "SV",
                "TH",
                "TN",
                "TR",
                "TW",
                "US",
                "UY",
                "VN",
                "ZA"
              ],
              external_urls: {
                spotify: "https://open.spotify.com/album/2JhVhsYSe65vunncE4AYV1"
              },
              href: "https://api.spotify.com/v1/albums/2JhVhsYSe65vunncE4AYV1",
              id: "2JhVhsYSe65vunncE4AYV1",
              images: [
                {
                  height: 640,
                  url:
                    "https://i.scdn.co/image/ab67616d0000b273c417aad130701f49d8e629b8",
                  width: 640
                },
                {
                  height: 300,
                  url:
                    "https://i.scdn.co/image/ab67616d00001e02c417aad130701f49d8e629b8",
                  width: 300
                },
                {
                  height: 64,
                  url:
                    "https://i.scdn.co/image/ab67616d00004851c417aad130701f49d8e629b8",
                  width: 64
                }
              ],
              name: "Quickly Quickly, Vol. 1",
              release_date: "2017-04-16",
              release_date_precision: "day",
              total_tracks: 10,
              type: "album",
              uri: "spotify:album:2JhVhsYSe65vunncE4AYV1"
            },
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5XTn5Az9AcSKu0oaauC5ES"
                },
                href:
                  "https://api.spotify.com/v1/artists/5XTn5Az9AcSKu0oaauC5ES",
                id: "5XTn5Az9AcSKu0oaauC5ES",
                name: "quickly, quickly",
                type: "artist",
                uri: "spotify:artist:5XTn5Az9AcSKu0oaauC5ES"
              }
            ],
            available_markets: [
              "AD",
              "AE",
              "AR",
              "AT",
              "AU",
              "BE",
              "BG",
              "BH",
              "BO",
              "BR",
              "CA",
              "CH",
              "CL",
              "CO",
              "CR",
              "CY",
              "CZ",
              "DE",
              "DK",
              "DO",
              "DZ",
              "EC",
              "EE",
              "EG",
              "ES",
              "FI",
              "FR",
              "GB",
              "GR",
              "GT",
              "HK",
              "HN",
              "HU",
              "ID",
              "IE",
              "IL",
              "IN",
              "IS",
              "IT",
              "JO",
              "JP",
              "KW",
              "LB",
              "LI",
              "LT",
              "LU",
              "LV",
              "MA",
              "MC",
              "MT",
              "MX",
              "MY",
              "NI",
              "NL",
              "NO",
              "NZ",
              "OM",
              "PA",
              "PE",
              "PH",
              "PL",
              "PS",
              "PT",
              "PY",
              "QA",
              "RO",
              "SA",
              "SE",
              "SG",
              "SK",
              "SV",
              "TH",
              "TN",
              "TR",
              "TW",
              "US",
              "UY",
              "VN",
              "ZA"
            ],
            disc_number: 1,
            duration_ms: 332173,
            explicit: false,
            external_ids: {
              isrc: "QMPKX1729751"
            },
            external_urls: {
              spotify: "https://open.spotify.com/track/2RycgtfFQZOPgEGrzBGE0j"
            },
            href: "https://api.spotify.com/v1/tracks/2RycgtfFQZOPgEGrzBGE0j",
            id: "2RycgtfFQZOPgEGrzBGE0j",
            is_local: false,
            name: "Getsomerest/sleepwell",
            popularity: 65,
            preview_url:
              "https://p.scdn.co/mp3-preview/15edb3e9d1647124a20350e8d9ec66893120378c?cid=774b29d4f13844c495f206cafdad9c86",
            track_number: 10,
            type: "track",
            uri: "spotify:track:2RycgtfFQZOPgEGrzBGE0j"
          },
          played_at: "2020-02-13T14:15:01.820Z",
          context: {
            external_urls: {
              spotify:
                "https://open.spotify.com/playlist/5RtIoZHMy9nfJ8mCNGceFy"
            },
            href: "https://api.spotify.com/v1/playlists/5RtIoZHMy9nfJ8mCNGceFy",
            type: "playlist",
            uri: "spotify:playlist:5RtIoZHMy9nfJ8mCNGceFy"
          }
        },
        {
          track: {
            album: {
              album_type: "single",
              artists: [
                {
                  external_urls: {
                    spotify:
                      "https://open.spotify.com/artist/5cnRXRa8otbppSiXvfdmo3"
                  },
                  href:
                    "https://api.spotify.com/v1/artists/5cnRXRa8otbppSiXvfdmo3",
                  id: "5cnRXRa8otbppSiXvfdmo3",
                  name: "Toonorth",
                  type: "artist",
                  uri: "spotify:artist:5cnRXRa8otbppSiXvfdmo3"
                }
              ],
              available_markets: [
                "AD",
                "AE",
                "AR",
                "AT",
                "AU",
                "BE",
                "BG",
                "BH",
                "BO",
                "BR",
                "CA",
                "CH",
                "CL",
                "CO",
                "CR",
                "CY",
                "CZ",
                "DE",
                "DK",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "ES",
                "FI",
                "FR",
                "GB",
                "GR",
                "GT",
                "HK",
                "HN",
                "HU",
                "ID",
                "IE",
                "IL",
                "IN",
                "IS",
                "IT",
                "JO",
                "JP",
                "KW",
                "LB",
                "LI",
                "LT",
                "LU",
                "LV",
                "MA",
                "MC",
                "MT",
                "MX",
                "MY",
                "NI",
                "NL",
                "NO",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PH",
                "PL",
                "PS",
                "PT",
                "PY",
                "QA",
                "RO",
                "SA",
                "SE",
                "SG",
                "SK",
                "SV",
                "TH",
                "TN",
                "TR",
                "TW",
                "US",
                "UY",
                "VN",
                "ZA"
              ],
              external_urls: {
                spotify: "https://open.spotify.com/album/4Fw2PdZjZSGA3Tk2lhLAY1"
              },
              href: "https://api.spotify.com/v1/albums/4Fw2PdZjZSGA3Tk2lhLAY1",
              id: "4Fw2PdZjZSGA3Tk2lhLAY1",
              images: [
                {
                  height: 640,
                  url:
                    "https://i.scdn.co/image/ab67616d0000b27333996a23e461d8b71c928150",
                  width: 640
                },
                {
                  height: 300,
                  url:
                    "https://i.scdn.co/image/ab67616d00001e0233996a23e461d8b71c928150",
                  width: 300
                },
                {
                  height: 64,
                  url:
                    "https://i.scdn.co/image/ab67616d0000485133996a23e461d8b71c928150",
                  width: 64
                }
              ],
              name: "Silience",
              release_date: "2018-09-17",
              release_date_precision: "day",
              total_tracks: 1,
              type: "album",
              uri: "spotify:album:4Fw2PdZjZSGA3Tk2lhLAY1"
            },
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5cnRXRa8otbppSiXvfdmo3"
                },
                href:
                  "https://api.spotify.com/v1/artists/5cnRXRa8otbppSiXvfdmo3",
                id: "5cnRXRa8otbppSiXvfdmo3",
                name: "Toonorth",
                type: "artist",
                uri: "spotify:artist:5cnRXRa8otbppSiXvfdmo3"
              }
            ],
            available_markets: [
              "AD",
              "AE",
              "AR",
              "AT",
              "AU",
              "BE",
              "BG",
              "BH",
              "BO",
              "BR",
              "CA",
              "CH",
              "CL",
              "CO",
              "CR",
              "CY",
              "CZ",
              "DE",
              "DK",
              "DO",
              "DZ",
              "EC",
              "EE",
              "EG",
              "ES",
              "FI",
              "FR",
              "GB",
              "GR",
              "GT",
              "HK",
              "HN",
              "HU",
              "ID",
              "IE",
              "IL",
              "IN",
              "IS",
              "IT",
              "JO",
              "JP",
              "KW",
              "LB",
              "LI",
              "LT",
              "LU",
              "LV",
              "MA",
              "MC",
              "MT",
              "MX",
              "MY",
              "NI",
              "NL",
              "NO",
              "NZ",
              "OM",
              "PA",
              "PE",
              "PH",
              "PL",
              "PS",
              "PT",
              "PY",
              "QA",
              "RO",
              "SA",
              "SE",
              "SG",
              "SK",
              "SV",
              "TH",
              "TN",
              "TR",
              "TW",
              "US",
              "UY",
              "VN",
              "ZA"
            ],
            disc_number: 1,
            duration_ms: 196923,
            explicit: false,
            external_ids: {
              isrc: "GBKQU1882650"
            },
            external_urls: {
              spotify: "https://open.spotify.com/track/5TuhMyeZ7bBd3A0PzKNW4D"
            },
            href: "https://api.spotify.com/v1/tracks/5TuhMyeZ7bBd3A0PzKNW4D",
            id: "5TuhMyeZ7bBd3A0PzKNW4D",
            is_local: false,
            name: "Silience",
            popularity: 61,
            preview_url:
              "https://p.scdn.co/mp3-preview/57713f5f94ed7095fdc933981628a1557d91e550?cid=774b29d4f13844c495f206cafdad9c86",
            track_number: 1,
            type: "track",
            uri: "spotify:track:5TuhMyeZ7bBd3A0PzKNW4D"
          },
          played_at: "2020-02-13T14:09:29.550Z",
          context: {
            external_urls: {
              spotify:
                "https://open.spotify.com/playlist/5RtIoZHMy9nfJ8mCNGceFy"
            },
            href: "https://api.spotify.com/v1/playlists/5RtIoZHMy9nfJ8mCNGceFy",
            type: "playlist",
            uri: "spotify:playlist:5RtIoZHMy9nfJ8mCNGceFy"
          }
        },
        {
          track: {
            album: {
              album_type: "compilation",
              artists: [
                {
                  external_urls: {
                    spotify:
                      "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                  },
                  href:
                    "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                  id: "0LyfQWJT6nXafLPZqxe9Of",
                  name: "Various Artists",
                  type: "artist",
                  uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                }
              ],
              available_markets: [
                "AD",
                "AE",
                "AR",
                "AT",
                "AU",
                "BE",
                "BG",
                "BH",
                "BO",
                "BR",
                "CA",
                "CH",
                "CL",
                "CO",
                "CR",
                "CY",
                "CZ",
                "DE",
                "DK",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "ES",
                "FI",
                "FR",
                "GB",
                "GR",
                "GT",
                "HK",
                "HN",
                "HU",
                "ID",
                "IE",
                "IL",
                "IN",
                "IS",
                "IT",
                "JO",
                "JP",
                "KW",
                "LB",
                "LI",
                "LT",
                "LU",
                "LV",
                "MA",
                "MC",
                "MT",
                "MX",
                "MY",
                "NI",
                "NL",
                "NO",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PH",
                "PL",
                "PS",
                "PT",
                "PY",
                "QA",
                "RO",
                "SA",
                "SE",
                "SG",
                "SK",
                "SV",
                "TH",
                "TN",
                "TR",
                "TW",
                "US",
                "UY",
                "VN",
                "ZA"
              ],
              external_urls: {
                spotify: "https://open.spotify.com/album/3u1k0CIc2zQdXxlhrBbPCV"
              },
              href: "https://api.spotify.com/v1/albums/3u1k0CIc2zQdXxlhrBbPCV",
              id: "3u1k0CIc2zQdXxlhrBbPCV",
              images: [
                {
                  height: 640,
                  url:
                    "https://i.scdn.co/image/cd71afef978e61e739d9efbdb5ba7fc0c5ab293f",
                  width: 640
                },
                {
                  height: 300,
                  url:
                    "https://i.scdn.co/image/9370fa186045efc977169dfc6c3ec48cc9a37e7a",
                  width: 300
                },
                {
                  height: 64,
                  url:
                    "https://i.scdn.co/image/c2108d73572c8d69b6eecc367e26ff3e8b937bea",
                  width: 64
                }
              ],
              name: "Chillhop Essentials Winter 2018",
              release_date: "2018-12-12",
              release_date_precision: "day",
              total_tracks: 26,
              type: "album",
              uri: "spotify:album:3u1k0CIc2zQdXxlhrBbPCV"
            },
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1eL4DVwObeAZjGOVjASAXd"
                },
                href:
                  "https://api.spotify.com/v1/artists/1eL4DVwObeAZjGOVjASAXd",
                id: "1eL4DVwObeAZjGOVjASAXd",
                name: "Hanz",
                type: "artist",
                uri: "spotify:artist:1eL4DVwObeAZjGOVjASAXd"
              }
            ],
            available_markets: [
              "AD",
              "AE",
              "AR",
              "AT",
              "AU",
              "BE",
              "BG",
              "BH",
              "BO",
              "BR",
              "CA",
              "CH",
              "CL",
              "CO",
              "CR",
              "CY",
              "CZ",
              "DE",
              "DK",
              "DO",
              "DZ",
              "EC",
              "EE",
              "EG",
              "ES",
              "FI",
              "FR",
              "GB",
              "GR",
              "GT",
              "HK",
              "HN",
              "HU",
              "ID",
              "IE",
              "IL",
              "IN",
              "IS",
              "IT",
              "JO",
              "JP",
              "KW",
              "LB",
              "LI",
              "LT",
              "LU",
              "LV",
              "MA",
              "MC",
              "MT",
              "MX",
              "MY",
              "NI",
              "NL",
              "NO",
              "NZ",
              "OM",
              "PA",
              "PE",
              "PH",
              "PL",
              "PS",
              "PT",
              "PY",
              "QA",
              "RO",
              "SA",
              "SE",
              "SG",
              "SK",
              "SV",
              "TH",
              "TN",
              "TR",
              "TW",
              "US",
              "UY",
              "VN",
              "ZA"
            ],
            disc_number: 1,
            duration_ms: 154000,
            explicit: false,
            external_ids: {
              isrc: "GBLV61811339"
            },
            external_urls: {
              spotify: "https://open.spotify.com/track/66z8EZXSd2VKGHlHX9DZSx"
            },
            href: "https://api.spotify.com/v1/tracks/66z8EZXSd2VKGHlHX9DZSx",
            id: "66z8EZXSd2VKGHlHX9DZSx",
            is_local: false,
            name: "Crossroads",
            popularity: 58,
            preview_url:
              "https://p.scdn.co/mp3-preview/009df44842eaeea5a8e8159246c88840c13f0100?cid=774b29d4f13844c495f206cafdad9c86",
            track_number: 19,
            type: "track",
            uri: "spotify:track:66z8EZXSd2VKGHlHX9DZSx"
          },
          played_at: "2020-02-13T14:06:12.709Z",
          context: {
            external_urls: {
              spotify:
                "https://open.spotify.com/playlist/5RtIoZHMy9nfJ8mCNGceFy"
            },
            href: "https://api.spotify.com/v1/playlists/5RtIoZHMy9nfJ8mCNGceFy",
            type: "playlist",
            uri: "spotify:playlist:5RtIoZHMy9nfJ8mCNGceFy"
          }
        },
        {
          track: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify:
                      "https://open.spotify.com/artist/3nCJkmgdZQ6l8o828Y3vNQ"
                  },
                  href:
                    "https://api.spotify.com/v1/artists/3nCJkmgdZQ6l8o828Y3vNQ",
                  id: "3nCJkmgdZQ6l8o828Y3vNQ",
                  name: "A L E X",
                  type: "artist",
                  uri: "spotify:artist:3nCJkmgdZQ6l8o828Y3vNQ"
                }
              ],
              available_markets: [
                "AD",
                "AE",
                "AR",
                "AT",
                "AU",
                "BE",
                "BG",
                "BH",
                "BO",
                "BR",
                "CA",
                "CH",
                "CL",
                "CO",
                "CR",
                "CY",
                "CZ",
                "DE",
                "DK",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "ES",
                "FI",
                "FR",
                "GB",
                "GR",
                "GT",
                "HK",
                "HN",
                "HU",
                "ID",
                "IE",
                "IL",
                "IN",
                "IS",
                "IT",
                "JO",
                "JP",
                "KW",
                "LB",
                "LI",
                "LT",
                "LU",
                "LV",
                "MA",
                "MC",
                "MT",
                "MX",
                "MY",
                "NI",
                "NL",
                "NO",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PH",
                "PL",
                "PS",
                "PT",
                "PY",
                "QA",
                "RO",
                "SA",
                "SE",
                "SG",
                "SK",
                "SV",
                "TH",
                "TN",
                "TR",
                "TW",
                "US",
                "UY",
                "VN",
                "ZA"
              ],
              external_urls: {
                spotify: "https://open.spotify.com/album/0ssOcOJhwRHzBFesFsJuye"
              },
              href: "https://api.spotify.com/v1/albums/0ssOcOJhwRHzBFesFsJuye",
              id: "0ssOcOJhwRHzBFesFsJuye",
              images: [
                {
                  height: 640,
                  url:
                    "https://i.scdn.co/image/ab67616d0000b2733a311684b7623c925e0bfe4b",
                  width: 640
                },
                {
                  height: 300,
                  url:
                    "https://i.scdn.co/image/ab67616d00001e023a311684b7623c925e0bfe4b",
                  width: 300
                },
                {
                  height: 64,
                  url:
                    "https://i.scdn.co/image/ab67616d000048513a311684b7623c925e0bfe4b",
                  width: 64
                }
              ],
              name: "Growing Up, Vol. 2",
              release_date: "2018-06-18",
              release_date_precision: "day",
              total_tracks: 28,
              type: "album",
              uri: "spotify:album:0ssOcOJhwRHzBFesFsJuye"
            },
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3nCJkmgdZQ6l8o828Y3vNQ"
                },
                href:
                  "https://api.spotify.com/v1/artists/3nCJkmgdZQ6l8o828Y3vNQ",
                id: "3nCJkmgdZQ6l8o828Y3vNQ",
                name: "A L E X",
                type: "artist",
                uri: "spotify:artist:3nCJkmgdZQ6l8o828Y3vNQ"
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/60J5TDNg9Xxp9zxDXpBOjM"
                },
                href:
                  "https://api.spotify.com/v1/artists/60J5TDNg9Xxp9zxDXpBOjM",
                id: "60J5TDNg9Xxp9zxDXpBOjM",
                name: "Alicks",
                type: "artist",
                uri: "spotify:artist:60J5TDNg9Xxp9zxDXpBOjM"
              }
            ],
            available_markets: [
              "AD",
              "AE",
              "AR",
              "AT",
              "AU",
              "BE",
              "BG",
              "BH",
              "BO",
              "BR",
              "CA",
              "CH",
              "CL",
              "CO",
              "CR",
              "CY",
              "CZ",
              "DE",
              "DK",
              "DO",
              "DZ",
              "EC",
              "EE",
              "EG",
              "ES",
              "FI",
              "FR",
              "GB",
              "GR",
              "GT",
              "HK",
              "HN",
              "HU",
              "ID",
              "IE",
              "IL",
              "IN",
              "IS",
              "IT",
              "JO",
              "JP",
              "KW",
              "LB",
              "LI",
              "LT",
              "LU",
              "LV",
              "MA",
              "MC",
              "MT",
              "MX",
              "MY",
              "NI",
              "NL",
              "NO",
              "NZ",
              "OM",
              "PA",
              "PE",
              "PH",
              "PL",
              "PS",
              "PT",
              "PY",
              "QA",
              "RO",
              "SA",
              "SE",
              "SG",
              "SK",
              "SV",
              "TH",
              "TN",
              "TR",
              "TW",
              "US",
              "UY",
              "VN",
              "ZA"
            ],
            disc_number: 1,
            duration_ms: 182869,
            explicit: false,
            external_ids: {
              isrc: "QZDA41889559"
            },
            external_urls: {
              spotify: "https://open.spotify.com/track/6mRmaBAb8ysO3pcGDaegL2"
            },
            href: "https://api.spotify.com/v1/tracks/6mRmaBAb8ysO3pcGDaegL2",
            id: "6mRmaBAb8ysO3pcGDaegL2",
            is_local: false,
            name: "Proud of You",
            popularity: 62,
            preview_url:
              "https://p.scdn.co/mp3-preview/ba756a63344a073ffa2ffd7f7a5d7a3a9031e498?cid=774b29d4f13844c495f206cafdad9c86",
            track_number: 27,
            type: "track",
            uri: "spotify:track:6mRmaBAb8ysO3pcGDaegL2"
          },
          played_at: "2020-02-13T14:03:38.865Z",
          context: {
            external_urls: {
              spotify:
                "https://open.spotify.com/playlist/5RtIoZHMy9nfJ8mCNGceFy"
            },
            href: "https://api.spotify.com/v1/playlists/5RtIoZHMy9nfJ8mCNGceFy",
            type: "playlist",
            uri: "spotify:playlist:5RtIoZHMy9nfJ8mCNGceFy"
          }
        }
      ]
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
