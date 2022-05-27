import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";

const CTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
}));

const CTab = styled(Tab)(({ theme }) => ({
  height: 54,
}));

export default function HorizontalTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CTabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
    >
      {props.tabs.map((item, key) => (
        <CTab key={key} label={item} />
      ))}
    </CTabs>
  );
}
