import * as React from "react";
import Paper from "@mui/material/Menu";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.black_078.main,
  fontWeight: "400",
}));

const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function DateSelectionDrop(props) {
  const AddClickEvent = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CustomButton aria-haspopup="true" onClick={AddClickEvent}>
        {props.value}
      </CustomButton>

      <Paper
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CustomBox>
          <TextField
            label={props.label}
            variant="standard"
            sx={{ width: "280px" }}
          />

          <Stack
            spacing={1}
            direction="row"
            justifyContent="flex-end"
            className="mt-6"
          >
            <Button variant="outlined" onClick={handleClose}>
              cancel
            </Button>

            <Button variant="contained">save</Button>
          </Stack>
        </CustomBox>
      </Paper>
    </div>
  );
}
