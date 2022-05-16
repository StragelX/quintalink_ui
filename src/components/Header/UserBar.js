import * as React from "react";
import { Divider, Avatar, Stack } from "@mui/material";
import Notifications from "./Notifications";
import Search from "./Search";
import AvailibleFile from "./AvailibleFile";
import CallDrop from "../DropDowns/CallDrop";

export default function UserBar() {
  return (
    <Stack direction="row" spacing={1.5}>
      <Search></Search>

      <CallDrop variant={"add"}></CallDrop>

      <Divider />

      <AvailibleFile></AvailibleFile>

      <Notifications />

      <Avatar alt="Remy Sharp" />
    </Stack>
  );
}
