import * as React from "react";
import WeekTableHeader from "./WeekTableHeader";
import WeekTableLinke from "./WeekTableLinke";

export default function WeekTable(props) {
  return (
    <div>
      <WeekTableHeader />

      <div className="grid grid-cols-7 items-stretch">
        <WeekTableLinke />
        <WeekTableLinke />
        <WeekTableLinke />
        <WeekTableLinke />
        <WeekTableLinke />
        <WeekTableLinke />
        <WeekTableLinke />
      </div>
    </div>
  );
}
