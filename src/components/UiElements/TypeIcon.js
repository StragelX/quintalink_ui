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
}));

export default function TypeIcon({ variant }) {
  switch (variant) {
    case "s":
      return <TIcon className="bg-[#FFB400]">S</TIcon>;
    case "m":
      return <TIcon className="bg-[#2196F3]">M</TIcon>;
    case "p":
      return <TIcon className="bg-[#4CAF50]">P</TIcon>;
    default:
      return;
  }
}
