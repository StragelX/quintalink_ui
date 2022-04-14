import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

const AvailibleIcon = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  height: theme.spacing(5),
  backgroundColor: theme.palette.grey_100.main,
  padding: theme.spacing(1, 3),
  color: theme.palette.primary.main,
}));

function AvailibleFile() {
  return (
    <AvailibleIcon>
      <Typography variant="subtitle2" color="primary">
        28 Files Available
      </Typography>
    </AvailibleIcon>
  );
}

export default AvailibleFile;
