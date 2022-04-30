import { Typography } from "@mui/material";
import * as React from "react";
import AvatarGroupWrap from "../UiElements/AvatarGroupWrap";
import CustomChip from "../UiElements/CustomChip";
import CustomLink from "../UiElements/CustomLink";
import FlexContainer from "../UiElements/FlexContainer";
import TypeIcon from "../UiElements/TypeIcon";

// let data = [
//   {
//     type: "p",
//     title: "Manishapatel Peter and Corporation-ABC",
//     stage: "requisition",
//     linkText: "PS TC006.02",
//     link: "",
//   },
// ];

export default function WeekTableFile(props) {
  return (
    <div className="px-2 py-4">
      <FlexContainer>
        <TypeIcon type={props.data.type} />

        <CustomChip variant={props.data.stage} className="ml-1" />
      </FlexContainer>

      <div className="mt-2">
        <CustomLink to={props.data.link} text={props.data.linkText} />
      </div>

      <Typography variant="body2" component="p">
        {props.data.title}
      </Typography>

      <div className="flex mt-1">
        <AvatarGroupWrap max={2} size="small" />
      </div>
    </div>
  );
}
