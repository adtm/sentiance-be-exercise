import React from "react";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const DateRange = ({ onChange }) => <RangePicker onChange={onChange} />;

export default DateRange;
