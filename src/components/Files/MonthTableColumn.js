import { Typography } from "@mui/material";
import * as React from "react";
import MonthTableFile from "./MonthTableFile";

export default function MonthTableColumn(props) {
  return (
    <div className="outline outline-1 outline-gray-200">
      <Typography variant="caption" component={"p"} align="center">
        {props.data.date}
      </Typography>

      <MonthTableFile />
    </div>
  );
}
