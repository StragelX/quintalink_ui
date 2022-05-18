import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import * as React from "react";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";
import TableRowsIcon from "@mui/icons-material/TableRows";
import DateRangeIcon from "@mui/icons-material/DateRange";

export default function FilesViewSelector(props) {
  const [viewtype, setViewType] = React.useState("book");

  const handleViewType = (event, newViewType) => {
    setViewType(newViewType);
  };

  return (
    <div className={(props.className ? props.className : "")}>
      <ToggleButtonGroup
        variant="contained"
        color="white"
        elevation={0}
        value={viewtype}
        exclusive
        onChange={handleViewType}
      >
        <ToggleButton value="book">
          <ChromeReaderModeOutlinedIcon />
        </ToggleButton>

        <ToggleButton value="rows">
          <TableRowsIcon />
        </ToggleButton>

        <ToggleButton value="calendar">
          <DateRangeIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}