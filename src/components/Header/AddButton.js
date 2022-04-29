import * as React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import { Button } from "@mui/material";
import TypeIcon from "../UiElements/TypeIcon";

const AddBnt = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: "50%",
  minWidth: 40,
  width: 40,
  height: 40,
  backgroundColor: "#303030",

  "&:hover": {
    backgroundColor: "#303030",
  },
}));

export default function AddButton() {
  const AddClickEvent = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AddBnt
        aria-label="account of current user"
        aria-haspopup="true"
        className={
          anchorEl
            ? "rotate-45 transition-transform"
            : "rotate-0 transition-transform"
        }
        onClick={AddClickEvent}
      >
        <AddIcon color="white"></AddIcon>
      </AddBnt>

      <Paper
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Typography
          variant="subtitle2"
          component="p"
          className="px-5 py-3"
          sx={{ color: "#666", width: "220px" }}
        >
          ADD
        </Typography>

        <MenuItem sx={{ pl: "20px" }} onClick={handleClose}>
          <TypeIcon type="p" />
          <span className="ml-4">Purchase File</span>
        </MenuItem>

        <MenuItem sx={{ pl: "20px" }} onClick={handleClose}>
          <TypeIcon type="s" />
          <span className="ml-4">Sale File</span>
        </MenuItem>

        <MenuItem sx={{ pl: "20px", mb: 1 }} onClick={handleClose}>
          <TypeIcon type="m" />
          <span className="ml-4">Mortgage File</span>
        </MenuItem>

        <Divider />

        <MenuItem sx={{ pl: "20px", mt: 1 }} onClick={handleClose}>
          <GroupIcon color="grey_500" sx={{ mr: "16px", width: "20px" }} />
          Client
        </MenuItem>

        <MenuItem sx={{ pl: "20px" }} onClick={handleClose}>
          <BusinessIcon color="grey_500" sx={{ mr: "16px", width: "20px" }} />
          Business
        </MenuItem>
      </Paper>
    </div>
  );
}
