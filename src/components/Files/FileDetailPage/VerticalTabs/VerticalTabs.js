import * as React from "react";
import PropTypes from "prop-types";
import { Box, Tabs, Tab } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import PaidIcon from "@mui/icons-material/Paid";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CalculateIcon from "@mui/icons-material/Calculate";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="bg-white rounded-tr-10px rounded-b-10px w-full h-full">
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="flex w-full my-8">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
      >
        <Tab
          centered="false"
          icon={<GroupIcon />}
          iconPosition="start"
          label="Parties"
          {...a11yProps(0)}
        />
        <Tab
          icon={<HomeIcon />}
          iconPosition="start"
          label="Property"
          {...a11yProps(1)}
        />
        <Tab
          icon={<PaidIcon />}
          iconPosition="start"
          label="Mortgage"
          {...a11yProps(2)}
        />
        <Tab
          icon={<VerifiedUserIcon />}
          iconPosition="start"
          label="Insurance"
          {...a11yProps(3)}
        />
        <Tab
          icon={<CalculateIcon />}
          iconPosition="start"
          label="Accounting"
          {...a11yProps(4)}
        />
        <Tab
          icon={<InsertDriveFileIcon />}
          iconPosition="start"
          label="Documents"
          {...a11yProps(5)}
        />
      </Tabs>

      <TabPanel value={value} index={0} className="flex-auto">
        Tab 1
      </TabPanel>

      <TabPanel value={value} index={1} className="flex-auto">
        Tab 2
      </TabPanel>

      <TabPanel value={value} index={2} className="flex-auto">
        Tab 3
      </TabPanel>

      <TabPanel value={value} index={3} className="flex-auto">
        Tab 4
      </TabPanel>

      <TabPanel value={value} index={4} className="flex-auto">
        Tab 5
      </TabPanel>

      <TabPanel value={value} index={5} className="flex-auto">
        Tab 6
      </TabPanel>
    </Box>
  );
}
