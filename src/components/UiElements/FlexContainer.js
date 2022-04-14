import * as React from "react";

function FlexContainer({ children, ...props }) {
  return (
    <div
      className={props.className + " flex items-center justify-between w-full"}
    >
      {children}
    </div>
  );
}

export default FlexContainer;
