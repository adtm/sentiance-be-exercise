import React, { Component } from "react";

import { getUserTimeline } from "./api/api";

import Chart from "./Chart/Chart";
import Dropdown from "./Dropdown/Dropdown";
import DateRange from "./DateRange/DateRange";

import { Row, Col } from "antd";

class App extends Component {
  state = {
    user: {},
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await getUserTimeline();
    this.setState({ user: response, loading: false });
  }

  onDropdownChange = () => {};

  render() {
    const { user, loading } = this.state;

    if (loading) return "Loading";

    return (
      <div>
        <Row justify="center">
          <Col xs={12} xl={10}>
            <DateRange onChange={() => {}} />
          </Col>
        </Row>
        {/* <Dropdown
          values={Object.keys(user.aggregated.transportModeDurations).map(
            el => el
          )}
          onChange={this.onDropdownChange}
        /> */}
        <Chart data={{}} />
      </div>
    );
  }
}

export default App;
