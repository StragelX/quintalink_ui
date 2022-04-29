import * as React from "react";
import { styled } from "@mui/material/styles";

const TIcon = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: 20,
  height: 20,
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 13,
  textTransform: "uppercase",
}));

const TIconSmall = styled("div")(({ theme }) => ({
  borderRadius: "50%",
  width: 12,
  height: 12,
  flex: "none",
}));

export default function TypeIcon({ variant, ...props }) {
  let cls = "";

  switch (props.type) {
    case "s":
      cls = "bg-[#FFB400]";
      break;
    case "m":
      cls = "bg-[#2196F3]";
      break;
    case "p":
      cls = "bg-[#4CAF50]";
      break;
    default:
      return "";
  }

  switch (variant) {
    case "small":
      return <TIconSmall className={cls}></TIconSmall>;
    default:
      return <TIcon className={cls}>{props.type}</TIcon>;
  }
}
