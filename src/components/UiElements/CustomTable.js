import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import Typography from "@mui/material/Typography";
import AvatarGroupWrap from "./AvatarGroupWrap";
import CustomChip from "./CustomChip";
import FileTypeMarker from "./FileTypeMarker";
import { Divider, Link } from "@mui/material";

function createData(
  file,
  id,
  name,
  adress,
  requisition_gate,
  closing_date,
  user,
  stage
) {
  return {
    file,
    id,
    name,
    adress,
    requisition_gate,
    closing_date,
    user,
    stage,
  };
}

const rows = [
  createData(
    "p",
    "D-9477",
    "Nettie Fields",
    "990 Meadowbrook Drive Asbestos, QC J1T 5H6",
    "Jan 31, 2022",
    "Jan 31, 2022"
  ),
  createData(
    "m",
    "D-9417",
    "Anna Fields",
    "990 Meadowbrook Drive Asbestos, QC J1T 5H6",
    "Jan 31, 2022",
    "Jan 31, 2022"
  ),
  createData(
    "s",
    "D-9421",
    "Nettie Johnson",
    "65 North Lane Saint-Isidore, NB E8M 3J7",
    "Nov 24, 2022",
    "Nov 31, 2022"
  ),
  createData(
    "m",
    "D-9424",
    "Sam Jhones",
    "990 Meadowbrook Drive Asbestos, QC J1T 5H6",
    "Jan 31, 2022",
    "Jan 31, 2022"
  ),
];

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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
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

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <TableContainer>
      <Table aria-labelledby="tableTitle">
        <EnhancedTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          rowCount={rows.length}
        />
        <TableBody>
          {rows
            .slice()
            .sort(getComparator(order, orderBy))
            .map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow hover key={row.id}>
                  <TableCell id={labelId} scope="row" padding="none">
                    <FileTypeMarker type={row.file} />
                  </TableCell>

                  <TableCell>
                    <Typography variant="body1" noWrap>
                      <Link href="stats">{row.id}</Link>
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
                      {row.requisition_gate}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="body1" noWrap>
                      {row.closing_date}
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
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
