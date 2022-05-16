import * as React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Header() {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
    >
      <Link underline="hover" color="inherit" variant="h6" href="/">
        Files
      </Link>
      <Typography color="text.primary" variant="h6" noWrap>
        ID 804512354
      </Typography>
    </Breadcrumbs>
  );
}

export default Header;
