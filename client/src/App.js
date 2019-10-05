import React, { Component } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";

import PlayerList from "./components/PlayerList";

class App extends Component {
  state = {
    searches: []
  };

  componentDidMount() {
    axios
      .get("/api/players")
      .then(res => {
        let searches = res.data;
        this.setState({ searches });
        localStorage.setItem("playerSearches", this.state.searches);
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  render() {
    return (
      <div>
        <Typography className="text-center" variant="h2">
          Women World Cup Players
        </Typography>
        <PlayerList searches={this.state.searches} />
      </div>
    );
  }
}

export default App;
