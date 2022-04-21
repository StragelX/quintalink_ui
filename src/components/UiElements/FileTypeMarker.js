import * as React from "react";

export default function FileTypeMarker(props) {
  let cls = "";
  switch (props.type) {
    case "s":
      cls = "background: #FFB400";
    case "m":
      cls = "background: #2196F3";
    case "p":
      cls = "background: #4CAF50";
  }
  return (
    <div
      className="w-6 h-6 flex items-center rounded justify-center text-sm text-white"
      style={cls}
    >
      {props.type}
    </div>
  );
}
