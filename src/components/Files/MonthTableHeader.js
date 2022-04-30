import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import * as React from "react";

const CTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
}));
export default function MonthTableHeader(props) {
  return (
    <div className="grid grid-cols-7 h-10 items-stretch border-b">
      <div className="flex items-center justify-start flex-col">
        <CTypography variant="body2" component="p">
          Mon
        </CTypography>
      </div>

      <div className="flex items-center justify-start flex-col">
        <CTypography variant="body2" component="p">
          Tue
        </CTypography>
      </div>

      <div className="flex items-center justify-start flex-col">
        <CTypography variant="body2" component="p">
          Wed
        </CTypography>
      </div>

      <div className="flex items-center justify-start flex-col">
        <CTypography variant="body2" component="p">
          Thu
        </CTypography>
      </div>

      <div className="flex items-center justify-start flex-col">
        <CTypography variant="body2" component="p">
          Fri
        </CTypography>
      </div>

      <div className="flex items-center justify-start flex-col">
        <CTypography variant="body2" component="p">
          Sat
        </CTypography>
      </div>

      <div className="flex items-center justify-start flex-col">
        <CTypography variant="body2" component="p">
          Sun
        </CTypography>
      </div>
    </div>
  );
}
