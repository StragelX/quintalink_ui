import { styled } from "@mui/material/styles";
import { MenuItem, Tooltip } from "@mui/material";
import * as React from "react";
import CustomLink from "../UiElements/CustomLink";
import TypeIcon from "../UiElements/TypeIcon";
import SyncIcon from "@mui/icons-material/Sync";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

const CMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: "3px 7px",
  display: "flex",
  alignItems: "baseline",
  gap: 5,

  "& .MuiSvgIcon-root": {
    alignSelf: "center",
    fontSize: 18,
    color: theme.palette.black_06.main,
  },
}));

const CMenuItemMore = styled(MenuItem)(({ theme }) => ({
  fontWeight: 500,
  padding: "3px 7px",
}));

let data = [
  {
    type: "p",
    title: "Manishapatel Peter and Corporation-ABC",
    stage: "requisition",
    linkText: "PS TC006.02",
    link: "",
  },

  {
    type: "s",
    title: "Andrew Smith",
    stage: "closing",
    linkText: "PS TM012.11",
    link: "",
  },

  {
    type: "m",
    title: "Nettie Johnson",
    stage: "closing",
    linkText: "Pk T12c6.c5",
    link: "",
  },

  {
    type: "p",
    title: "Manishapatel Peter and Corporation-ABC",
    stage: "requisition",
    linkText: "PS TC006.02",
    link: "",
  },
];

function StageType(val) {
  if (val === "requisition") {
    return <SyncIcon />;
  } else {
    return <SportsScoreIcon />;
  }
}

function CalcMore(val) {
  if (val.length > 3) {
    return <CMenuItemMore>{val.length - 3 + " More"}</CMenuItemMore>;
  }
}

export default function MonthTableFile(props) {
  return (
    <div>
      {data.map((item) => (
        <Tooltip placement="right-start" title={item.title}>
          <CMenuItem>
            <TypeIcon type={item.type} variant="small" />

            {StageType(item.stage)}

            <CustomLink
              to={item.link}
              text={item.linkText}
              className="uppercase"
            />
          </CMenuItem>
        </Tooltip>
      ))}

      {CalcMore(data)}
    </div>
  );
}
