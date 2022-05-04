import { Typography } from "@mui/material";
import * as React from "react";
import MonthTableFile from "./MonthTableFile";
import { styled } from "@mui/material/styles";

const CTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.black.main,
}));

export default function MonthTableColumn(props) {
  return (
    <div className="outline outline-1 outline-gray-200">
      <CTypography variant="caption" component={"p"}>
        {props.data.date}
      </CTypography>

      <MonthTableFile />
    </div>
  );
}
