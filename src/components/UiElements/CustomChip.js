import * as React from "react";
import Chip from "@mui/material/Chip";
import SyncIcon from "@mui/icons-material/Sync";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

// PROPS
// variants: requisition, closing

export default function CustomChip({ variant, ...props }) {
  switch (variant) {
    case "requisition":
      return (
        <Chip
          className={props.className}
          icon={<SyncIcon color="black_06" />}
          label="Requisition"
          variant="outlined"
          sx={{ width: 103 }}
          size="small"
        />
      );
    case "closing":
      return (
        <Chip
          className={props.className}
          icon={<SportsScoreIcon color="black_06" />}
          label="Closing"
          variant="outlined"
          sx={{ width: 103 }}
          size="small"
        />
      );
    default:
      return "";
  }
}
