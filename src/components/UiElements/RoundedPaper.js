import { Paper } from "@mui/material";
import * as React from "react";

export default function FlexContainer({ children, ...props }) {
  return (
    <Paper
      elevation={0}
      sx={{ borderRadius: "10px" }}
      className={props.className + " w-full"}
    >
      {children}
    </Paper>
  );
}
