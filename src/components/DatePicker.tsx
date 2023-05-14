import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { themedInput } from "../styles/ThemedInput";

export default function ResponsiveDatePicker() {
  const [dateFrom, setDateFrom] = useState<Dayjs | null>(null);
  const [dateTo, setDateTo] = useState<Dayjs | null>(null);

  // console.log(new Date(value["$d"]));
  // Object { "$L": "en", "$u": undefined, "$d": Date Sat May 13 2023 00:00:00 GMT+0200 (Central European Summer Time), "$x": {}, "$y": 2023, "$M": 4, "$D": 13, "$W": 6, "$H": 0, "$m": 0, … }
  //* Option1 - Construct w template literal: `${}`
  //* Option2 (pref): convert to Unix timestamp im milliseconds:
  //* console.log(dayjs(value["d"]).valueOf());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Zeitraum von"
        value={dateFrom}
        onChange={(newValue) => setDateFrom(newValue)}
        sx={{ ...themedInput, margin: "1rem" }}
      />
      <DatePicker
        label="Zeitraum bis"
        value={dateTo}
        onChange={(newValue) => setDateTo(newValue)}
        sx={{ ...themedInput, margin: "1rem" }}
      />
    </LocalizationProvider>
  );
}
