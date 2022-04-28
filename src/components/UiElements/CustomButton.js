import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// PROPS
// variants: white, icon
// with_arrow - arrow for drop down

const WhiteBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  color: theme.palette.black_078.main,
  textTransform: "capitalize",
  fontSize: 15,
}));

export default function CustomButton({ variant, ...props }) {
  switch (variant) {
    case "white":
      return (
        <WhiteBtn onClick={props.emitClick}>
          <span className="w-16 block">{props.text}</span>
          {props.with_arrow ? <ArrowDropDownIcon /> : ""}
        </WhiteBtn>
      );
    case "icon":
      return (
        <IconButton onClick={props.emitClick}>
          <span className="w-16 block">{props.text}</span>{" "}
          {props.with_arrow ? <ArrowDropDownIcon /> : ""}
        </IconButton>
      );
    default:
      return (
        <Button variant="contained" color="white" onClick={props.emitClick}>
          {props.text} {props.with_arrow ? <ArrowDropDownIcon /> : ""}
        </Button>
      );
  }
}
