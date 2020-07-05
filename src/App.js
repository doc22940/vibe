import React from "react";
import "./App.css";
import hash from "./hash";
import { loginURL } from "./config";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import axios from "axios";

import Login from "./Views/Login";
import ResultTable from "./Components/ResultTable";
import SearchBar from "./Components/SearchBar";
import Dashboard from "./Components/Dashboard";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      token: null,
      topTracks: [],
      topArtists: [],
      audioAnalysis: [],
      timeRange: "short_term",
      searchTerm: "",
      topType: "tracks",
    };
  }

  componentDidMount() {
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token,
      });
    }
  }

  handleLogin() {
    console.log(loginURL);
    window.location.replace(loginURL);
    this.setState({
      isLoggedIn: true,
    });
  }

  handleChange = async (event) => {
    const { name, value, type, checked } = event.target;
    (await type) === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
    if (name === "timeRange") {
      this.refreshData();
    }
  };

  getTopArtists = async () => {
    let customParams = {
      headers: {
        Authorization: `Bearer ${this.state.token}`,
      },
      params: {
        time_range: this.state.timeRange,
        limit: 50,
      },
    };
    await axios
      .get("https://api.spotify.com/v1/me/top/artists", customParams)
      .then((res) => {
        this.setState({ topArtists: res.data.items });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getTopTracks = async () => {
    await axios
      .get("https://api.spotify.com/v1/me/top/tracks", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
        params: {
          time_range: this.state.timeRange,
          limit: 50,
        },
      })
      .then((res) => {
        this.setState({ topTracks: res.data.items });
      })
      .catch((err) => {
        console.log(err);
      });
    await this.analyzeTopTracks();
  };

  analyzeTopTracks = async () => {
    let ids = [];
    this.state.topTracks.forEach((track) => {
      ids.push(track.id);
    });

    let customParams = {
      headers: {
        Authorization: `Bearer ${this.state.token}`,
      },
      params: {
        ids: ids.join(),
      },
    };
    await axios
      .get("https://api.spotify.com/v1/audio-features", customParams)
      .then((res) => {
        res.data.audio_features.forEach((track) => {
          const { id, acousticness, danceability, energy, valence } = track;
          this.setState({
            audioAnalysis: [
              ...this.state.audioAnalysis,
              {
                id: id,
                acousticness: acousticness,
                danceability: danceability,
                energy: energy,
                valence: valence,
              },
            ],
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  refreshData = () => {
    this.getTopArtists();
    this.getTopTracks();
  };

  initializeData = () => {
    this.getTopArtists();
    this.getTopTracks();
  };

  render() {
    return (
      <div className="App">
        {!this.state.token && (
          <Login
            isLoggedIn={this.state.isLoggedIn}
            handleLogin={() => this.handleLogin()}
          />
        )}
        {this.state.token && (
          <React.Fragment>
            <Container>
              <header> Your Vibe </header>
              <Dashboard
                handleChange={this.handleChange}
                initializeData={this.initializeData}
                token={this.state.token}
              />
              <SearchBar
                handleChange={this.handleChange}
                timeRange={this.state.timeRange}
                topType={this.state.topType}
                initializeData={this.initializeData}
              />
              <ResultTable
                topType={this.state.topType}
                topTracks={this.state.topTracks}
                topArtists={this.state.topArtists}
                searchTerm={this.state.searchTerm}
              />
            </Container>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;