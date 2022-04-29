import { Divider } from "@mui/material";
import * as React from "react";
import WeekTableFile from "./WeekTableFile";
import { styled } from "@mui/material/styles";

const CDivider = styled(Divider)(({ theme }) => ({
  margin: "0 10px",
}));

export default function WeekTableLinke(props) {
  return (
    <div className="flex flex-col items-stretch justify-center border-l">
      <WeekTableFile />
      <CDivider />
      <WeekTableFile />
      <CDivider />
      <WeekTableFile />
      <CDivider />
      <WeekTableFile />
    </div>
  );
}
