import * as React from "react";

export default function FlexContainer({ children, ...props }) {
  return (
    <div
      className={props.className + " flex items-center justify-between w-full"}
    >
      {children}
    </div>
  );
}
