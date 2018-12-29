import React from "react";
import { Chart, Axis, Legend, Tooltip, Geom } from "bizcharts";

const DataChart = ({ data, yAxis }) => (
  <Chart
    height={400}
    style={{ width: 400 }}
    data={data}
    scale={{
      type: { alias: "Type" },
      count: { alias: [yAxis] },
    }}
    forceFit
  >
    <Axis title name="type" />
    <Legend />
    <Tooltip crosshairs={{ type: "rect" }} />
    <Geom type="interval" position={`type*${yAxis}`} color="type" />
  </Chart>
);

export default DataChart;
