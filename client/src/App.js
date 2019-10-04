import React, { Component } from "react";
import axios from "axios";
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
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  render() {
    return (
      <div>
        <h1>home page</h1>
        <PlayerList searches={this.state.searches} />
      </div>
    );
  }
}

export default App;
