import * as React from "react";

export default function FileTypeMarker(props) {
  let cls = "";
  switch (props.type) {
    case "s":
      cls = "bg-[#FFB400]";
      break;
    case "m":
      cls = "bg-[#2196F3]";
      break;
    case "p":
      cls = "bg-[#4CAF50]";
      break;
    default:
      cls = "";
  }

  return (
    <div
      className={
        cls +
        " w-6 h-6 flex items-center rounded justify-center text-sm text-white uppercase " +
        props.className
      }
    >
      {props.type}
    </div>
  );
}
