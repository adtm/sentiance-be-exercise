import React from "react";
import { Radio } from "antd";
import { capitalize } from "../utils/formatter";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const ModeSwitch = ({ onChange, values }) => (
  <RadioGroup onChange={onChange} defaultValue={values[0]}>
    {values.map(name => (
      <RadioButton key={name} value={name}>
        {capitalize(name)}
      </RadioButton>
    ))}
  </RadioGroup>
);

export default ModeSwitch;
