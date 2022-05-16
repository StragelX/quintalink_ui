import * as React from "react";
import Paper from "@mui/material/Menu";
import { MenuItem, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import TypeIcon from "../UiElements/TypeIcon";

export default function HeaderAddDrop(props) {
  return (
    <Paper
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(props.anchorEl)}
      onClose={props.closeEvent}
    >
      <Typography
        variant="subtitle2"
        component="p"
        className="px-5 py-3"
        sx={{ color: "#666", width: "220px" }}
      >
        ADD
      </Typography>

      <MenuItem sx={{ pl: "20px" }} onClose={props.closeEvent}>
        <TypeIcon type="p" />
        <span className="ml-4">Purchase File</span>
      </MenuItem>

      <MenuItem sx={{ pl: "20px" }} onClose={props.closeEvent}>
        <TypeIcon type="s" />
        <span className="ml-4">Sale File</span>
      </MenuItem>

      <MenuItem sx={{ pl: "20px", mb: 1 }} onClose={props.closeEvent}>
        <TypeIcon type="m" />
        <span className="ml-4">Mortgage File</span>
      </MenuItem>

      <Divider />

      <MenuItem sx={{ pl: "20px", mt: 1 }} onClose={props.closeEvent}>
        <GroupIcon color="grey_500" sx={{ mr: "16px", width: "20px" }} />
        Client
      </MenuItem>

      <MenuItem sx={{ pl: "20px" }} onClose={props.closeEvent}>
        <BusinessIcon color="grey_500" sx={{ mr: "16px", width: "20px" }} />
        Business
      </MenuItem>
    </Paper>
  );
}
