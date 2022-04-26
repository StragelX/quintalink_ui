import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import CustomTableRow from "./CustomTableRow";
import CustomTableHead from "./CustomTableHead";

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
        <CustomTableHead
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
                <CustomTableRow row={row} labelId={labelId}></CustomTableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
