import * as React from "react";
import Avatar from "@mui/material/Avatar";

// PROPS
// name, shortName

// variants: md, sm

export default function CAvatar({ variant, ...props }) {
  switch (variant) {
    case "md":
      return (
        <Avatar alt={props.name} src="" sx={{ width: 32, height: 32 }}>
          {props.shortName}
        </Avatar>
      );

    case "sm":
      return (
        <Avatar alt={props.name} src="" sx={{ width: 24, height: 24 }}>
          {props.shortName}
        </Avatar>
      );

    case "xs":
      return (
        <Avatar alt={props.name} src="" sx={{ width: 20, height: 20 }}>
          {props.shortName}
        </Avatar>
      );

    default:
      return (
        <Avatar alt={props.name} src="">
          {props.shortName}
        </Avatar>
      );
  }
}
