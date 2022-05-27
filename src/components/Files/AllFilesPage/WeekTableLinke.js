import { Divider } from "@mui/material";
import * as React from "react";
import WeekTableFile from "./WeekTableFile";
import { styled } from "@mui/material/styles";
import { filesInfo } from "../../../data";

const CDivider = styled(Divider)(({ theme }) => ({
  margin: "0 10px",
}));

export default function WeekTableLinke(props) {
  return (
    <div>
      {filesInfo.map((item, key) => (
        <div key={key} className="border-l">
          <WeekTableFile data={item} />
          <CDivider />
        </div>
      ))}
    </div>
  );
}
