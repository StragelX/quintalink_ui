import * as React from "react";
import { calendar } from "../../../data";
import MonthTableColumn from "./MonthTableColumn";
import MonthTableHeader from "./MonthTableHeader";

export default function MonthTable(props) {
  return (
    <div>
      <MonthTableHeader />

      <div className="grid grid-cols-7 items-stretch">
        {calendar.map((item, key) => (
          <MonthTableColumn key={key} data={item} />
        ))}
      </div>
    </div>
  );
}
