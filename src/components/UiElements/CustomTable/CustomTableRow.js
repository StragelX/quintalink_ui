import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import AvatarGroupWrap from "../AvatarGroupWrap";
import CustomChip from "../CustomChip";
import FileTypeMarker from "../FileTypeMarker";
import { Link } from "@mui/material";
import DateSelectionDrop from "./DateSelectionDrop";
import { styled } from "@mui/material/styles";

const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.black_078.main,
  textDecoration: "none",

  "&:hover": {
    color: "#000",
    textDecoration: "underline",
  },
}));

export default function CustomTableRow(props) {
  let row = props.row;

  return (
    <TableRow hover key={row.id}>
      <TableCell id={props.labelId} scope="row" padding="none">
        <FileTypeMarker type={row.file} />
      </TableCell>

      <TableCell>
        <Typography variant="body1" noWrap>
          <CustomLink href="stats">{row.id}</CustomLink>
        </Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body1" noWrap>
          {row.name}
        </Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body1">{row.adress}</Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body1" noWrap>
          <DateSelectionDrop
            label={"Edit Requisition Date"}
            value={row.requisition_gate}
          />
        </Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body1" noWrap>
          <DateSelectionDrop
            label={"Edit Closing Date"}
            value={row.closing_date}
          />
        </Typography>
      </TableCell>

      <TableCell>
        <AvatarGroupWrap max="2" />
      </TableCell>

      <TableCell>
        <CustomChip />
      </TableCell>
    </TableRow>
  );
}
