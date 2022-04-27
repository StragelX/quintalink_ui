import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { Stack, InputBase } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey_100.main,
  width: 230,
  height: theme.spacing(5),
  padding: theme.spacing(1, 2),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  marginLeft: theme.spacing(1),

  "& .MuiInputBase-input": {
    padding: 0,
  },
}));

export default function SearchWrap(props) {
  return (
    <Search className={props.className}>
      <Stack direction="row">
        <SearchIcon color="grey_0_6" />

        <StyledInputBase placeholder="Search…" />
      </Stack>
    </Search>
  );
}