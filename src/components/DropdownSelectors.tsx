import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function DropdownSelectors() {
  const [level, setLevel] = useState("-1");
  const [quelle, setQuelle] = useState("-1");

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel
            variant="standard"
            htmlFor="level-select"
            sx={{ margin: "0 1rem" }}
          >
            Level
          </InputLabel>
          <NativeSelect
            defaultValue={"-1"}
            inputProps={{
              name: "level",
              id: "level-select",
            }}
            onChange={(event) => setLevel(event.target.value)}
            sx={{ margin: "1rem" }}
          >
            <option value={0}>0: unknown</option>
            <option value={1}>1: critical error</option>
            <option value={2}>2: error</option>
            <option value={3}>3: warning</option>
            <option value={4}>4: info</option>
            <option value={"-1"}>(alle)</option>
          </NativeSelect>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel
            variant="standard"
            htmlFor="quelle-select"
            sx={{ margin: "0 1rem" }}
          >
            Quelle
          </InputLabel>
          <NativeSelect
            defaultValue={"-1"}
            inputProps={{
              name: "quelle",
              id: "quelle-select",
            }}
            onChange={(event) => setQuelle(event.target.value)}
            sx={{ margin: "0 1rem" }}
          >
            <option value={9}>9: HOMEPAGE-TOOL</option>
            <option value={10}>10: SHOW-ROOOOM</option>
            <option value={"-1"}>(alle)</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </>
  );
}
