import React from "react";
import { Resizable } from "react-resizable";

const ResizableBox = ({ index, ...props }) => {
  return (
    <Resizable
      enable={{
        right: true,
      }}
      handle={<div className="resizable-handle" />}
      onResize={(e, data) => props.onResize(index, data)}
      {...props}
    >
      {props.children}
    </Resizable>
  );
};

export default ResizableBox;
