import * as React from "react";
import { Button, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import DataSelection from "./DataSelection";
import AvatarGroupWrap from "../UiElements/AvatarGroupWrap";
import ClientsSelect from "./ClientsSelect";
import HeaderAddDrop from "./HeaderAddDrop";
import AddButton from "../Header/AddButton";
// import WeekMonthDrop from "../Files/WeekMonthDrop";
// import WeekMonthSelect from "./WeekMonthSelect";
import MoreFilesDrop from "./MoreFilesDrop";

// PROPS
// max - max for avatars
// value - value for data select
// label - label for date select
// date - day for grid table pop-up

// variants = add, avatar, date, tab_type

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.black_078.main,
  fontWeight: "400",
}));

const CMenuItemMore = styled(MenuItem)(({ theme }) => ({
  fontWeight: 500,
  padding: "3px 7px",
  fontSize: 13,
}));

export default function CallDrop({ variant, ...props }) {
  const ClickEvent = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  switch (variant) {
    case "add":
      return (
        <div>
          <AddButton ClickEvent={ClickEvent} anchorEl={anchorEl} />
          <HeaderAddDrop closeEvent={handleClose} anchorEl={anchorEl} />
        </div>
      );

    case "avatar":
      return (
        <div>
          <CustomButton onClick={ClickEvent}>
            <AvatarGroupWrap onClick={ClickEvent} max={props.max} />
          </CustomButton>

          <ClientsSelect closeEvent={handleClose} anchorEl={anchorEl} />
        </div>
      );

    case "date":
      return (
        <div>
          <CustomButton onClick={ClickEvent}>{props.value}</CustomButton>
          <DataSelection
            closeEvent={handleClose}
            anchorEl={anchorEl}
            value={props.value}
            label={props.label}
          />
        </div>
      );

    case "more_files":
      return (
        <div>
          <CMenuItemMore onClick={ClickEvent}>{props.value}</CMenuItemMore>

          {/* TO DO */}
          {/* pass day prop */}
          <MoreFilesDrop
            closeEvent={handleClose}
            anchorEl={anchorEl}
            date={props.date}
            day="mon"
          />
        </div>
      );

    default:
      return "";
  }
}
