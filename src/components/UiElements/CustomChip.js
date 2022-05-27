import * as React from "react";
import Chip from "@mui/material/Chip";
import SyncIcon from "@mui/icons-material/Sync";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import CAvatar from "./CAvatar";
import { styled } from "@material-ui/core";

const AvatarChip = styled(Chip)(({ theme }) => ({
  paddingLeft: 4,

  "& .MuiChip-label": {
    marginRight: 8,
  },
}));

// PROPS
// variants: requisition, closing, avatar

export default function CustomChip({ variant, ...props }) {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  switch (variant) {
    case "requisition":
      return (
        <Chip
          className={props.className ? props.className : ""}
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
          className={props.className ? props.className : ""}
          icon={<SportsScoreIcon color="black_06" />}
          label="Closing"
          variant="outlined"
          sx={{ width: 100 }}
          size="small"
        />
      );

    case "avatar":
      return (
        <AvatarChip
          className={props.className ? props.className : ""}
          avatar={<CAvatar alt={props.name} variant={"sm"} />}
          label={props.name}
          variant="outlined"
          onDelete={handleDelete}
        />
      );

    default:
      return "";
  }
}
