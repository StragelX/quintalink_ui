import * as React from "react";
import { Button, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import DataSelection from "./DataSelection";
import AvatarGroupWrap from "../UiElements/AvatarGroupWrap";
import ClientsSelect from "./ClientsSelect";
import HeaderAddDrop from "./HeaderAddDrop";
import AddButton from "../Header/AddButton";
import MoreFilesDrop from "./MoreFilesDrop";
import CAvatar from "../UiElements/CAvatar";
import { Tooltip } from "@material-ui/core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MainSolicitor from "./MainClerks";
import MainClerks from "./MainClerks";

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

export default function CallDrop({ variant, children, ...props }) {
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

    case "date-with-label":
      return (
        <div>
          <CustomButton onClick={ClickEvent}>{children}</CustomButton>
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

          {/* TO DO pass day prop */}
          <MoreFilesDrop
            closeEvent={handleClose}
            anchorEl={anchorEl}
            date={props.date}
            day="mon"
          />
        </div>
      );

    case "calendar":
      return (
        <div>
          <Button onClick={ClickEvent} anchorEl={anchorEl}>
            calendar
          </Button>
          {/* TODO add calendar pop-up */}
        </div>
      );

    case "file_solicitor":
      return (
        <div>
          <Tooltip title="Remy Sharp">
            <Button
              size="small"
              color="black_06"
              onClick={ClickEvent}
              anchorEl={anchorEl}
            >
              <CAvatar alt="Remy Sharp" />
              <ArrowDropDownIcon color="black_06" className="ml-1" />
            </Button>
          </Tooltip>

          <MainSolicitor closeEvent={handleClose} anchorEl={anchorEl} />
        </div>
      );

    case "file_clerks":
      return (
        <div>
          <Button
            size="small"
            color="black_06"
            onClick={ClickEvent}
            anchorEl={anchorEl}
          >
            <AvatarGroupWrap max={2} />
            <ArrowDropDownIcon color="black_06" className="ml-1" />
          </Button>

          <MainClerks closeEvent={handleClose} anchorEl={anchorEl} />
        </div>
      );

    default:
      return "";
  }
}
