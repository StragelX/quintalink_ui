import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const DropDown = styled(Select)(({ theme }) => ({
  paddingTop: "5px",
}));

function FilseTypeSelect(props) {
  const [type, setType] = React.useState("");

  const handleType = (event) => {
    setType(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 150 }} className={props.className}>
      <Select value={type} onChange={handleType} displayEmpty>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>File: All</MenuItem>
        <MenuItem value={2}>File: type 1</MenuItem>
        <MenuItem value={3}>File: type 2</MenuItem>
        <MenuItem value={4}>File: type 3</MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilseTypeSelect;
