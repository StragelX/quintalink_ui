import * as React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { styled } from "@mui/material/styles";

const Btn = styled(ToggleButton)(({ theme }) => ({
  padding: "7px 22px",
  textTransform: "capitalize",
}));

export default function TableContentSwitch(props) {
  const [type, setType] = React.useState("all");

  const handleType = (event, newType) => {
    setType(newType);
  };

  return (
    <ToggleButtonGroup
      className={props.className}
      variant="contained"
      color="white"
      disableElevation
      value={type}
      exclusive
      onChange={handleType}
    >
      <Btn value="all">All (19)</Btn>

      <Btn value="requisition">Requisition (10)</Btn>

      <Btn value="closing">Closing (9)</Btn>
    </ToggleButtonGroup>
  );
}