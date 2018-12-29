import React from "react";
import { Select } from "antd";

const Option = Select.Option;

const Dropdown = ({ onChange, values }) => (
  <Select defaultValue={values[0]} style={{ width: 120 }} onChange={onChange}>
    {values.map(value => (
      <Option value={value} key={value}>
        {value}
      </Option>
    ))}
  </Select>
);

export default Dropdown;
