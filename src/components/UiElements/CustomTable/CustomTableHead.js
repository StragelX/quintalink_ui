import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import Typography from "@mui/material/Typography";

const headCells = [
  {
    id: "file",
    disablePadding: true,
    label: "File",
  },
  {
    id: "id",
    disablePadding: false,
    label: "ID",
  },
  {
    id: "name",
    disablePadding: false,
    label: "Client Name",
  },
  {
    id: "adress",
    disablePadding: false,
    label: "Property Address",
  },
  {
    id: "requisition_gate",
    disablePadding: false,
    label: "Requisition Date",
  },
  {
    id: "closing_date",
    disablePadding: false,
    label: "Closing Date",
  },
  {
    id: "user",
    disablePadding: false,
    label: "User",
  },
  {
    id: "stage",
    disablePadding: false,
    label: "Stage",
  },
];

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell, key) => (
          <TableCell key={headCell.id}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography variant="body2" noWrap>
                {headCell.label}
              </Typography>

              {orderBy === headCell.id ? (
                <Box sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
