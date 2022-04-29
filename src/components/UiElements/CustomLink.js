import * as React from "react";
import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const CLink = styled(Link)(({ theme }) => ({
  color: theme.palette.black_078.main,
  textDecoration: "none",

  "&:hover": {
    color: "#000",
    textDecoration: "underline",
  },
}));

export default function CustomLink(props) {
  return (
    <CLink href="stats" className={props.className}>
      {props.text}
    </CLink>
  );
}