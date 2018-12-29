import React, { Component } from "react";
import Chart from "./Chart/Chart";

import { getTimeline } from "./api/api";

class App extends Component {
  state = {
    user: {}
  };

  async componentDidMount() {
    const response = await getTimeline();
    this.setState({ user: response });
  }

  render() {
    return <Chart />;
  }
}

export default App;
