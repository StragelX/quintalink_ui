import * as React from "react";
import { Button, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Notifications() {
  return (
    <Button
      disableElevation
      color="grey_100"
      variant="contained"
      sx={{
        borderRadius: "50%",
        padding: 0,
        width: 40,
        height: 40,
        minWidth: 40,
      }}
    >
      <Badge
        badgeContent={4}
        color="primary"
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        sx={{ padding: 0.75 }}
      >
        <NotificationsIcon color="grey_600"></NotificationsIcon>
      </Badge>
    </Button>
  );
}
