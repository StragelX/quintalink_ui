import * as React from "react";
import Chip from "@mui/material/Chip";
import SyncIcon from "@mui/icons-material/Sync";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

export default function CustomChip(props) {
  return (
    <div>
      <Chip icon={<SyncIcon />} label="Requisition" variant="outlined" />
      {/* <Chip
        icon={<SportsScoreIcon />}
        label="Closing"
        variant="outlined"
      /> */}
    </div>
  );
}
