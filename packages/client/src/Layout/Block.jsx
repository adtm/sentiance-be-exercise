import React from "react";
import Block from "react-blocks";

const BlockWithDefaultPadding = ({ children, ...props }) => {
  console.log(props);
  return (
    <Block {...props} style={{ padding: 20 }}>
      {children}
    </Block>
  );
};

export default BlockWithDefaultPadding;
