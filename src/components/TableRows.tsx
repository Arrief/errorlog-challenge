import { useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import HelpIcon from "@mui/icons-material/Help";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ILog } from "../types/QueryTypes";

export default function Row(props: { data: ILog }) {
  const { data } = props;
  const [open, setOpen] = useState(false);

  // Converting unix timestamp (milliseconds) to human-readable date
  const timestamp = new Date(data.date).toLocaleString("de-DE");

  // For displaying only beginning of the error summary under "Kurzbeschreibung"; if the respective property exists, display "Keine Kurzbeschreibung"
  const msgPreview = data.topic
    ? `${data.topic.slice(0, 25)}...`
    : "Keine Kurzbeschreibung";

  // Ternary for conditional icon coloring, depending on severity of error: 1=critical, 2=error, 3=warning, 4=info
  const errorIconColor =
    data.status === 1 || data.status === 2
      ? { color: "red" }
      : { color: "orange" };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" }, textAlign: "left" }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            sx={{ color: "var(--theme-color)" }}
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {/* Reason for repeating TableCell code a lot here: collecting data properties in array and mapping over it to dynamically generate TableCells reduces overall length of code not that much, also some properties need to be checked with ternary, which is easier this way */}
        <TableCell component="th" scope="row">
          {`${timestamp} Uhr`}
        </TableCell>
        <TableCell align="center">
          {/* Conditional icon & coloring depending on error status; 0=unknown */}
          {data.level === 0 ? <HelpIcon /> : <ErrorIcon sx={errorIconColor} />}
        </TableCell>
        <TableCell align="center">{data.quelle}</TableCell>
        <TableCell align="center">{data.status}</TableCell>
        <TableCell align="center">{data.id_firma}</TableCell>
        <TableCell align="center">{data.id_user}</TableCell>
        <TableCell align="center">{data.id_car}</TableCell>
        <TableCell align="center">{data.id_data}</TableCell>
        <TableCell align="center">{data.id_proto}</TableCell>
        <TableCell align="center">
          {data.id_portal === 0 ? "(unbekannt)" : data.id_portal}
        </TableCell>
        <TableCell align="center">{msgPreview}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                Fehlerbeschreibung
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <>
                    {/* Full "Kurzbeschreibung" and error message */}
                    <Typography
                      variant="subtitle2"
                      component="h5"
                      sx={{ fontStyle: "italic" }}
                    >
                      {data.topic ?? "Keine Kurzbeschreibung"}
                    </Typography>
                    <div>&nbsp;</div>
                    <Typography variant="body2" component="p">
                      {data.msg}
                    </Typography>
                  </>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
