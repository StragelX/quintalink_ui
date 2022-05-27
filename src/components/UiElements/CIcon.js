import * as React from "react";
import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import PaidIcon from "@mui/icons-material/Paid";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CalculateIcon from "@mui/icons-material/Calculate";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

export default function CIcon({ variant, ...props }) {
  switch (variant) {
    case "GroupIcon":
      return <GroupIcon />;

    case "HomeIcon":
      return <HomeIcon />;

    case "PaidIcon":
      return <PaidIcon />;

    case "VerifiedUserIcon":
      return <VerifiedUserIcon />;

    case "CalculateIcon":
      return <CalculateIcon />;

    case "InsertDriveFileIcon":
      return <InsertDriveFileIcon />;

    default:
      return "";
  }
}
