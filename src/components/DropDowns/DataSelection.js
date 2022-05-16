import * as React from "react";
import Paper from "@mui/material/Menu";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function DataSelection(props) {
  return (
    <Paper
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(props.anchorEl)}
      onClose={props.closeEvent}
    >
      <CustomBox>
        <TextField
          label={props.value}
          variant="standard"
          sx={{ width: "280px" }}
        />

        <Stack
          spacing={1}
          direction="row"
          justifyContent="flex-end"
          className="mt-6"
        >
          <Button variant="outlined" onClick={props.closeEvent}>
            cancel
          </Button>

          <Button variant="contained">save</Button>
        </Stack>
      </CustomBox>
    </Paper>
  );
}
