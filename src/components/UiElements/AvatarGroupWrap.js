import * as React from "react";
import AvatarGroup from "@mui/material/AvatarGroup";
import { users } from "../../data";
import CAvatar from "./CAvatar";

export default function AvatarGroupWrap({ variant, ...props }) {
  return (
    <AvatarGroup max={props.max} className={props.className}>
      {users.map((user, key) => {
        return (
          <CAvatar variant={props.size} key={key} alt={user.name} src="">
            {user.name
              .split(" ")
              .map((item) => item.toUpperCase().substring(0, 1))
              .join("")}
          </CAvatar>
        );
      })}
    </AvatarGroup>
  );
}
