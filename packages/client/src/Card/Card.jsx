import React, { Fragment } from "react";
import { Tag, Avatar } from "antd";

const Card = ({ name, distance }) => (
  <Fragment>
    <Avatar size={32} icon="car" />
    <h3>{name}</h3>

    <Tag color="gold">Data Module</Tag>
    <h5>Distance {distance.toLocaleString()}</h5>
  </Fragment>
);

export default Card;
