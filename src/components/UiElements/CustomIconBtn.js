import * as React from "react";
// import { styled } from "@mui/material/styles";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// const WhiteBtn = styled(IconButton)(({ theme }) => ({
// }));

export default function CustomIconBtn({ variant, ...props }) {
  switch (variant) {
    case "left":
      return (
        <IconButton>
          <KeyboardArrowLeftIcon />
        </IconButton>
      );
    case "right":
      return (
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      );
    default:
      return <IconButton></IconButton>;
  }
}
