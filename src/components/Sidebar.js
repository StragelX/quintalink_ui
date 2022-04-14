import * as React from "react";
import { Drawer, List, ListItem, Link } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import sidebarTheme from "./../themes/sidebarTheme";
import StarIcon from "@mui/icons-material/Star";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import StarRateIcon from "@mui/icons-material/StarRate";
import StyleIcon from "@mui/icons-material/Style";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left" open={true}>
      <ThemeProvider theme={sidebarTheme}>
        <List>
          <ListItem>
            <Link href="favorites">
              <StarIcon></StarIcon>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="files">
              <TextSnippetIcon></TextSnippetIcon>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="stats">
              <AssessmentIcon></AssessmentIcon>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="stats">
              <GroupIcon></GroupIcon>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="stats">
              <BusinessIcon></BusinessIcon>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="favs">
              <StarRateIcon></StarRateIcon>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="favs">
              <StyleIcon></StyleIcon>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="settings">
              <SettingsIcon></SettingsIcon>
            </Link>
          </ListItem>
        </List>
      </ThemeProvider>
    </Drawer>
  );
}

export default Sidebar;
