import { Typography } from "@mui/material";
import * as React from "react";
import MonthTableFile from "./MonthTableFile";
import { styled } from "@mui/material/styles";

const CTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.black.main,
}));

const ActiveDay = styled(Typography)(({ theme }) => ({
  margin: "auto",
  textAlign: "center",
  color: theme.palette.white.main,
  borderRadius: "50%",
  width: 20,
  height: 20,
  lineHeight: "20px",
  backgroundColor: theme.palette.primary.main,
}));

export default function MonthTableColumn(props) {
  return (
    <div className="outline outline-1 outline-gray-200">
      {props.data.isActive ? (
        <ActiveDay variant="caption" component={"p"}>
          {props.data.date}
        </ActiveDay>
      ) : (
        <CTypography variant="caption" component={"p"}>
          {props.data.date}
        </CTypography>
      )}

      <MonthTableFile date={props.data.date} />
    </div>
  );
}
