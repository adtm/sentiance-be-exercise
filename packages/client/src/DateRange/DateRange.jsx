import React from "react";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const DateRange = ({ defaultValue, onChange }) => (
  <RangePicker
    defaultValue={defaultValue}
    format="YYYY-MM-DD"
    onChange={onChange}
    allowClear={false}
  />
);

export default DateRange;
