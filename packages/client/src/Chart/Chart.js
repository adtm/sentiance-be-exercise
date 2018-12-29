import React from "react";
import { Chart, Axis, Legend, Tooltip, Geom } from "bizcharts";

const data = [{ month: "Jan.", count: 69, city: "tokyo" }];

const scale = {
  type: { alias: "Type" },
  duration: { alias: "Duration" }
};

class DataChart extends React.Component {
  render() {
    return (
      <Chart height={400} data={data} scale={scale} forceFit>
        <Axis title name="type" />
        <Axis title name="duration" />
        <Legend />
        <Tooltip crosshairs={{ type: "rect" }} />
        <Geom type="interval" position="type*duration" color="type" />
      </Chart>
    );
  }
}

export default DataChart;
