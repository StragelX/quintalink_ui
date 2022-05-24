import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import * as React from "react";

const PButtton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(0.5, 1.25),
  fontSize: 13,
  fontWeight: 400,
  lineHeight: "18px",
}));

export default function PurchaseButtton(props) {
  return <PButtton variant="contained">Purchase</PButtton>;
}
