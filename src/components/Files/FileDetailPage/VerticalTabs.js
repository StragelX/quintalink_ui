import * as React from "react";
import PropTypes from "prop-types";
import { Box, Tabs, Tab } from "@mui/material";
import HorizontalTabs from "../../UiElements/HorizontalTabs";
import { partiesTabs, verticalTabs } from "../../../data";
import CIcon from "../../UiElements/CIcon";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} id={`vertical-tabpanel-${index}`} {...other}>
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
        {verticalTabs.map((item, key) => (
          <Tab
            key={key}
            icon={<CIcon variant={item.icon} />}
            iconPosition="start"
            label={item.label}
            {...a11yProps(item.index)}
          />
        ))}
      </Tabs>

      <TabPanel value={value} index={0} className="flex-auto">
        <HorizontalTabs tabs={partiesTabs} />
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
