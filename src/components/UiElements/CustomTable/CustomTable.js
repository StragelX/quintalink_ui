import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import CustomTableRow from "./CustomTableRow";
import CustomTableHead from "./CustomTableHead";
import { filesInfo } from "../../../data";

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
      <Table>
        <CustomTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          rowCount={filesInfo.length}
        />
        <TableBody>
          {filesInfo
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
