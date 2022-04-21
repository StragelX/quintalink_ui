import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

function AvatarGroupWrap(props) {
  return (
    <AvatarGroup max={props.max} className={props.className}>
      <Avatar alt="Remy Sharp" src="" />
      <Avatar alt="Travis Howard" src="" />
      <Avatar alt="Cindy Baker" src="" />
      <Avatar alt="Agnes Walker" src="" />
      <Avatar alt="Trevor Henderson" src="" />
    </AvatarGroup>
  );
}

export default AvatarGroupWrap;
