import * as React from "react";
import Paper from "@mui/material/Menu";
import { Checkbox, FormControlLabel, FormGroup, MenuItem } from "@mui/material";

export default function WeekMonthSelect(props) {
  return (
    <Paper
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(props.anchorEl)}
      onClose={props.closeEvent}
    >
      <MenuItem onClick={props.closeEvent}>Week</MenuItem>

      <MenuItem onClick={props.closeEvent}>Month</MenuItem>

      <MenuItem>
        <FormGroup>
          <FormControlLabel
            className="nowrap"
            control={<Checkbox color="black" sx={{ p: "0 8px" }} />}
            label="Show Weekends"
          />
        </FormGroup>
      </MenuItem>
    </Paper>
  );
}
