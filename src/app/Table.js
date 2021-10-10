import { useContext } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AppContext } from "./context";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function NEOTable() {
  const { data } = useContext(AppContext);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>NEO Name</StyledTableCell>
              <StyledTableCell align="right">
                Min Estimated Diameter (km)
              </StyledTableCell>
              <StyledTableCell align="right">
                Max Estimated Diameter (km)
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(([name, minDiameter, maxDiameter], index) => (
              <TableRow
                key={name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell align="left">
                  {index + 1 + "."}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {minDiameter.toFixed(2)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {maxDiameter.toFixed(2)}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default NEOTable;
