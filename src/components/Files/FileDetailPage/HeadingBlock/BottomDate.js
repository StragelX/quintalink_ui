import * as React from "react";
import SyncIcon from "@mui/icons-material/Sync";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

// PROPS
// type, title, date

function TypeIcon(val) {
  switch (val) {
    case "requisition":
      return <SyncIcon color="black_06" />;

    case "closing":
      return <SportsScoreIcon color="black_06" />;

    default:
      return "";
  }
}

export default function BottomDate(props) {
  return (
    <div className="flex items-center gap-1">
      {TypeIcon(props.type)}

      <span className="capitalize font-medium text-sm text-black_06">
        {props.title}:
      </span>
      <span className="font-bold text-base">{props.date}</span>
    </div>
  );
}
