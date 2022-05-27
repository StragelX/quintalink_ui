import * as React from "react";
import { Stack } from "@mui/material";
import CustomButton from "./../../UiElements/CustomButton";
import GridDayMontSwitch from "../../UiElements/GridDayMontSwitch";
import WeekMonthDrop from "./WeekMonthDrop";

export default function TableDateSelector() {
  return (
    <Stack direction="row" spacing={1.25}>
      <CustomButton variant="white" text="Today" />

      <GridDayMontSwitch />

      <WeekMonthDrop />
    </Stack>
  );
}
