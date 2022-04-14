import * as React from "react";
import { AppBar, Toolbar } from "@mui/material";
import Breadcrumbs from "./Breadcrumbs";
import UserBar from "./UserBar";
import FlexContainer from "../UiElements/FlexContainer";

function Header() {
  return (
    <AppBar position="static" color="white" elevation={0}>
      <Toolbar>
        <FlexContainer>
          <Breadcrumbs></Breadcrumbs>

          <UserBar></UserBar>
        </FlexContainer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
