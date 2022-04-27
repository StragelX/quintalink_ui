import * as React from "react";
import { Divider, Avatar, Stack } from "@mui/material";
import Notifications from "./Notifications";
import Search from "./Search";
import AddButton from "./AddButton";
import AvailibleFile from "./AvailibleFile";

export default function UserBar() {
  return (
    <Stack direction="row" spacing={1.5}>
      <Search></Search>

      <AddButton></AddButton>

      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ mt: 0, mb: 0 }}
      ></Divider>

      <AvailibleFile></AvailibleFile>

      <Notifications />

      <Avatar alt="Remy Sharp" />
    </Stack>
  );
}
