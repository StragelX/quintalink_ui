import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import * as React from "react";

const CTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
}));

const ActiveDay = styled(Typography)(({ theme }) => ({
  color: theme.palette.white.main,
  backgroundColor: theme.palette.primary.main,
}));

let data = [
  {
    date: "1",
    day: "Mon",
    isActive: true,
  },
  {
    date: "2",
    day: "Tue",
  },
  {
    date: "3",
    day: "Wed",
  },
  {
    date: "4",
    day: "Thu",
  },
  {
    date: "5",
    day: "Fri",
  },
  {
    date: "6",
    day: "Sat",
  },
  {
    date: "7",
    day: "Sun",
  },
];

const cls = "w-9 h-9 rounded-full flex items-center justify-center";

function IsActive(val) {
  if (val.isActive === true) {
    return (
      <ActiveDay className={cls} variant="subtitle2" component="p">
        {val.date}
      </ActiveDay>
    );
  } else {
    return (
      <Typography className={cls} variant="subtitle2" component="p">
        {val.date}
      </Typography>
    );
  }
}

export default function WeekTableHeader(props) {
  return (
    <div className="grid grid-cols-7 h-16 items-stretch border-b">
      {data.map((item) => (
        <div className="flex items-center justify-start flex-col">
          {IsActive(item)}

          <CTypography variant="body2" component="p">
            {item.day}
          </CTypography>
        </div>
      ))}
    </div>
  );
}
