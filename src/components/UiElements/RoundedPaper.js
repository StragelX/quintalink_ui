import { Paper } from "@mui/material";
import * as React from "react";

export default function FlexContainer({ children, ...props }) {
  return (
    <Paper
      elevation={0}
      className={"w-full rounded-10px " + (props.className ? props.className : "")}
    >
      {children}
    </Paper>
  );
}
