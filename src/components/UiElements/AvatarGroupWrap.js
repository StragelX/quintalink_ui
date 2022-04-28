import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function AvatarGroupWrap(props) {
  let size = "";
  if (props.size == "small") {
    size = {
      width: 32,
      heigth: 32,
    };
  }

  return (
    <AvatarGroup max={props.max} className={props.className}>
      <Avatar alt="Remy Sharp" sx={{ size }} src="" />
      <Avatar alt="Travis Howard" src="" />
      <Avatar alt="Cindy Baker" src="" />
      <Avatar alt="Agnes Walker" src="" />
      <Avatar alt="Trevor Henderson" src="" />
    </AvatarGroup>
  );
}
