import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

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

export default function AddButton(props) {
  return (
    <div>
      <AddBnt
        className={
          props.anchorEl
            ? "rotate-45 transition-transform"
            : "rotate-0 transition-transform"
        }
        onClick={props.ClickEvent}
      >
        <AddIcon color="white"></AddIcon>
      </AddBnt>
    </div>
  );
}
