import React, { Fragment } from "react";
import moment from "moment";

import { getUserTimeline } from "./api/api";
import { aggregateFilteredData } from "./utils/aggregate";

import Card from "./Card/Card";
import Chart from "./Chart/Chart";
import Block from "./Layout/Block";
import DateRange from "./DateRange/DateRange";
import ModeSwitch from "./ModeSwitch/ModeSwitch";
import { Alert, Spin } from "antd";

import {
  DEFAULT_DATES,
  DEFAULT_FILTER,
  DEFAULT_MODES,
  START_DATE_INDEX,
  END_DATE_INDEX,
} from "./App.const";

class App extends React.Component {
  state = {
    user: {
      aggregated: {
        transportMode: { amount: {}, duration: {} },
        carDistance: 0,
      },
    },
    dates: DEFAULT_DATES,
    filterType: DEFAULT_FILTER,
    loading: false,
    error: false,
  };

  async componentDidMount() {
    const { dates } = this.state;
    await this.getData(dates);
  }

  getData = async ({ start, end }) => {
    this.setState({ loading: true });

    try {
      const response = await getUserTimeline({ start, end });
      this.setState({ user: response, error: false, loading: false });
    } catch (err) {
      this.setState({ error: true, loading: false });
    }
  };

  onCalendarChange = (_, values) => {
    const dates = {
      start: moment.utc(values[START_DATE_INDEX]),
      end: moment.utc(values[END_DATE_INDEX]),
    };
    this.setState({ dates }, () => this.getData(dates));
  };

  onModeChange = ({ target: { value } }) => this.setState({ filterType: value });

  render() {
    const {
      error,
      loading,
      filterType,
      dates: { start, end },
      user: {
        aggregated: { carDistance, transportMode },
      },
    } = this.state;

    return (
      <Block>
        <Block layout center vertical>
          <Block>
            <ModeSwitch values={DEFAULT_MODES} onChange={this.onModeChange} />
          </Block>
          <Block>
            <DateRange defaultValue={[start, end]} onChange={this.onCalendarChange} />
          </Block>
        </Block>

        <Spin tip="Loading..." spinning={loading}>
          <Block layout center vertical>
            {!error ? (
              <Fragment>
                <Card name="Car" distance={carDistance} />
                <Block>
                  <Chart
                    yAxis={filterType}
                    data={aggregateFilteredData(filterType, transportMode)}
                  />
                </Block>
              </Fragment>
            ) : (
              <Alert message="Error Loading Data" type="error" />
            )}
          </Block>
        </Spin>
      </Block>
    );
  }
}

export default App;
