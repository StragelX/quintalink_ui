import * as React from "react";
import Chip from "@mui/material/Chip";
import SyncIcon from "@mui/icons-material/Sync";
// import SportsScoreIcon from "@mui/icons-material/SportsScore";

export default function CustomChip(props) {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div className={props.className}>
      <Chip
        icon={<SyncIcon />}
        label="Requisition"
        variant="outlined"
        onClick={handleClick}
      />
      {/* <Chip
        icon={<SportsScoreIcon />}
        label="Closing"
        variant="outlined"
        onClick={handleClick}
      /> */}
    </div>
  );
}
