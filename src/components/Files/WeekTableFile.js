import { Typography } from "@mui/material";
import * as React from "react";
import AvatarGroupWrap from "../UiElements/AvatarGroupWrap";
import CustomChip from "../UiElements/CustomChip";
import CustomLink from "../UiElements/CustomLink";
import FlexContainer from "../UiElements/FlexContainer";
import TypeIcon from "../UiElements/TypeIcon";

export default function WeekTableFile() {
  return (
    <div className="px-2 py-4">
      <FlexContainer>
        <TypeIcon variant="p" />

        <CustomChip variant={"closing"} />
      </FlexContainer>

      <div className="mt-2">
        <CustomLink text="PS TC006.02" />
      </div>

      <Typography variant="body2" component="p">
        Manishapatel Peter and Corporation -ABC
      </Typography>

      <div className="flex">
        <AvatarGroupWrap max={2} size="small" />
      </div>
    </div>
  );
}
