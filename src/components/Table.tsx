import { ChangeEvent, MouseEvent, useState } from "react";
import PaginationController from "./PaginationController";
import Row from "./TableRows";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { TResults } from "../types/QueryTypes";

// Table titles for map method
const headerTitles = [
  "Level",
  "Quelle",
  "Status",
  "Firma",
  "User",
  "Fahrzeug ID",
  "Data ID",
  "Protokoll ID",
  "Portal",
  "Kurzbeschreibung",
];

export default function PaginatedTable(props: { logs: TResults }) {
  const { logs } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - logs.length) : 0;

  const handleChangePage = (
    _event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer>
      <Table aria-label="collapsible table with pagination">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontWeight: "bold" }}>
              Datum{" "}
              <ArrowDownwardIcon
                fontSize="small"
                sx={{
                  color: "gray",
                  marginLeft: ".2rem",
                  verticalAlign: "middle",
                }}
              />{" "}
            </TableCell>
            {headerTitles.map((title) => (
              <TableCell key={title} align="left" sx={{ fontWeight: "bold" }}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? logs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : logs
          ).map((log) => (
            <Row key={log.id} data={log} />
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={12} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          {/* sx removes bottom line below pagination */}
          <TableRow sx={{ "&:last-child td": { borderBottom: "none" } }}>
            <TablePagination
              rowsPerPageOptions={[
                10, 25, 50, 100,
                // { label: "All", value: -1 },
              ]}
              colSpan={12}
              count={logs.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={PaginationController}
              // Center pagination display & buttons
              sx={{
                "& > .MuiToolbar-root": {
                  margin: "3rem auto",
                  display: "flex",
                  justifyContent: "center",
                },
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
