import * as React from "react";
import Paper from "@mui/material/Menu";
import { users } from "../../data";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  ListSubheader,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import CustomChip from "../UiElements/CustomChip";

const CustomBox = styled(Box)(({ theme }) => ({
  width: 375,
}));

const CFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginLeft: 0,
  width: "100%",
  justifyContent: "space-between",
  whiteSpace: "nowrap",
}));

export default function MainClerks(props) {
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
        <div className="mx-4 my-6 pb-2.5 border-b border-gray-300">
          <p className="mb-2 text-primary text-xs">* Clerk(s):</p>

          <div className="flex flex-wrap gap-2">
            <CustomChip variant={"avatar"} name="Rick Sanchez" />
            <CustomChip variant={"avatar"} name="Nettie Johnson" />
            <CustomChip variant={"avatar"} name="Andrew Smith" />

            <TextField
              className="flex-auto"
              variant="standard"
              placeholder="* Clerk(s):"
            />
          </div>
        </div>

        {users.filter((e) => e.type === "clerik").length ? (
          <List
            subheader={
              <ListSubheader component="div">Clerk (s):</ListSubheader>
            }
          >
            {users
              .filter((e) => e.type === "clerik")
              .map((user, key) => {
                return (
                  <ListItem key={key}>
                    <FormGroup sx={{ width: "100%" }}>
                      {/* TO DO add Avatar inside checkbox line */}
                      <CFormControlLabel
                        labelPlacement="start"
                        control={<Checkbox color="black" />}
                        label={user.name}
                      />
                    </FormGroup>
                  </ListItem>
                );
              })}
          </List>
        ) : null}

        <Stack
          spacing={1}
          direction="row"
          justifyContent="flex-end"
          className="mt-6 pb-2 px-4"
        >
          <Button variant="outlined" size="small" onClick={props.closeEvent}>
            cancel
          </Button>
          <Button variant="contained" size="small" onClick={props.closeEvent}>
            Save
          </Button>
        </Stack>
      </CustomBox>
    </Paper>
  );
}
