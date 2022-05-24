import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Menu";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import CustomButton from "../UiElements/CustomButton";

export default function WeekMonthDrop() {
  const AddClickEvent = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CustomButton
        variant="white"
        with_arrow={true}
        text="Week"
        emitClick={AddClickEvent}
      />

      <Paper
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Week</MenuItem>

        <MenuItem onClick={handleClose}>Month</MenuItem>

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
    </div>
  );
}
