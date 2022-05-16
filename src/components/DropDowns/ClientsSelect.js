import * as React from "react";
import Paper from "@mui/material/Menu";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  ListSubheader,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { users } from "../../data";

const CustomBox = styled(Box)(({ theme }) => ({
  width: 230,
}));

const CFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginLeft: 0,
  width: "100%",
  justifyContent: "space-between",
  whiteSpace: "nowrap",
}));

export default function ClientsSelect(props) {
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

        {users.filter((e) => e.type === "Solisitor").length ? (
          <List
            subheader={
              <ListSubheader component="div">Solisitor (s):</ListSubheader>
            }
          >
            {users
              .filter((e) => e.type === "Solisitor")
              .map((user, key) => {
                return (
                  <ListItem key={key}>
                    <FormGroup sx={{ width: "100%" }}>
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
      </CustomBox>
    </Paper>
  );
}
