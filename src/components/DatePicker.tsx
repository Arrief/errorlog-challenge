import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers";
import { themedInput } from "../styles/ThemedInput";
import MyContext from "../context/ContextProvider";

export default function ResponsiveDatePicker() {
  const [dateFrom, setDateFrom] = useState<number | null>(null);
  const [dateTo, setDateTo] = useState<number | null>(null);

  const context = useContext(MyContext)!;

  // State values dateFrom & dateTo are linked to DateTimePickers, whenever they update, save their value in the userQueries too
  useEffect(() => {
    context.handleQueryInput("dateFrom", dateFrom!);
  }, [dateFrom]);

  useEffect(() => {
    context.handleQueryInput("dateTo", dateTo!);
  }, [dateTo]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="Zeitraum von"
        value={dateFrom}
        /* Adds a "clear" button to manually reset selected date; Problem: sets dateFrom to NaN, interferes with next server request if user does not select another date after clearing.
            slotProps={{
            actionBar: { actions: ["clear"] },
            }}
        */
        onChange={(newValue) => {
          // Convert to Unix timestamp in milliseconds
          const unixMilliseconds = dayjs(newValue).valueOf();
          setDateFrom(unixMilliseconds);
        }}
        sx={{ ...themedInput, margin: "1rem" }}
      />
      <DateTimePicker
        label="Zeitraum bis"
        value={dateTo}
        onChange={(newValue) => {
          const unixMilliseconds = dayjs(newValue).valueOf();
          setDateTo(unixMilliseconds);
        }}
        sx={{ ...themedInput, margin: "1rem" }}
      />
    </LocalizationProvider>
  );
}
