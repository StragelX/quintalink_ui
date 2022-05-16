import * as React from "react";
import Paper from "@mui/material/Menu";
import { MenuItem, styled, Typography } from "@mui/material";
import TypeIcon from "../UiElements/TypeIcon";
import { filesInfo } from "../../data";
import CustomLink from "../UiElements/CustomLink";
import SyncIcon from "@mui/icons-material/Sync";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import AvatarGroupWrap from "../UiElements/AvatarGroupWrap";

const CDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.black_078.main,
  fontWeight: 500,
  textAlign: "center",
  marginBottom: 6,
  marginTop: 17,
}));

const CDay = styled(Typography)(({ theme }) => ({
  color: theme.palette.black_038.main,
  textAlign: "center",
  marginBottom: 11,
  textTransform: "capitalize",
}));

function StageType(val) {
  if (val === "requisition") {
    return <SyncIcon color="black_06" sx={{ height: 16 }} />;
  } else {
    return <SportsScoreIcon color="black_06" sx={{ height: 16 }} />;
  }
}

export default function MoreFilesDrop({ variant, ...props }) {
  return (
    <Paper
      sx={{ maxWidth: 265 }}
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      open={Boolean(props.anchorEl)}
      onClose={props.closeEvent}
    >
      <CDate variant="subtitle2" component="p">
        {props.date}
      </CDate>

      <CDay variant="body2" component="p">
        {props.day}
      </CDay>

      <div className="scrollable max-h-[250px]">
        {filesInfo.map((item, key) => (
          <MenuItem key={key} onClose={props.closeEvent}>
            <div
              className={
                "flex w-full flex-col items-start pb-2 " +
                (key !== filesInfo.length - 1 ? "border-b" : null)
              }
            >
              <div className="flex gap-1 items-center w-full">
                <TypeIcon type={item.type} variant="small" />

                {StageType(item.stage)}

                <CustomLink
                  to={item.link}
                  text={item.linkText}
                  className="uppercase block flex-auto"
                />

                <AvatarGroupWrap max={2} size={"md"} />
              </div>

              <p className="truncate text-black_078 max-w-full">{item.title}</p>
            </div>
          </MenuItem>
        ))}
      </div>
    </Paper>
  );
}
