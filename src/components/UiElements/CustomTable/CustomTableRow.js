import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import AvatarGroupWrap from "../AvatarGroupWrap";
import CustomChip from "../CustomChip";
import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import TypeIcon from "../TypeIcon";
import CallDrop from "../../DropDowns/CallDrop";

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
        <TypeIcon type={row.type} />
      </TableCell>

      <TableCell>
        <Typography variant="body1" noWrap>
          <CustomLink text={row.linkText} />
          {row.linkText}
        </Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body1">{row.title}</Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body1">{row.adress}</Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body1" noWrap>
          <CallDrop
            variant={"date"}
            value={row.requisition_gate}
            label={"Edit Requisition Date"}
          />
        </Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body1" noWrap>
          <CallDrop
            variant={"date"}
            value={row.requisition_gate}
            label={"Edit Requisition Date"}
          />
        </Typography>
      </TableCell>

      <TableCell>
        <AvatarGroupWrap max={2} />
      </TableCell>

      <TableCell>
        <CustomChip variant={row.stage} />
      </TableCell>
    </TableRow>
  );
}
