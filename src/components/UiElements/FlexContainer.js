import * as React from "react";

export default function FlexContainer({ children, ...props }) {
  return (
    <div
      className={
        "flex items-center justify-between w-full " +
        (props.className ? props.className : "")
      }
    >
      {children}
    </div>
  );
}
