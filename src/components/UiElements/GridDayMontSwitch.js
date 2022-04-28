import * as React from "react";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomIconBtn from "./CustomIconBtn";

const CustomTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.white.contrastText,
  textTransform: "capitalize",
  fontSize: 15,
  display: "flex",
  alignItems: "center",
  marginRight: theme.spacing(4),
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 2.5),
}));

export default function GridDayMontSwitch(props) {
  return (
    <CustomPaper elevation={0}>
      <CustomTypo variant="button" component="p">
        January 2022
      </CustomTypo>

      <CustomIconBtn variant={"left"}></CustomIconBtn>
      <CustomIconBtn variant={"right"}></CustomIconBtn>
    </CustomPaper>
  );
}
