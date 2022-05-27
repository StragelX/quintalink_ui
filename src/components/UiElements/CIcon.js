import * as React from "react";
import GroupIcon from "@mui/icons-material/Group";
import StoreIcon from '@mui/icons-material/Store';
import PaidIcon from "@mui/icons-material/Paid";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CalculateIcon from "@mui/icons-material/Calculate";
import DescriptionIcon from '@mui/icons-material/Description';

export default function CIcon({ variant, ...props }) {
  switch (variant) {
    case "GroupIcon":
      return <GroupIcon />;

    case "StoreIcon":
      return <StoreIcon />;

    case "PaidIcon":
      return <PaidIcon />;

    case "VerifiedUserIcon":
      return <VerifiedUserIcon />;

    case "CalculateIcon":
      return <CalculateIcon />;

    case "DescriptionIcon":
      return <DescriptionIcon />;

    default:
      return "";
  }
}
