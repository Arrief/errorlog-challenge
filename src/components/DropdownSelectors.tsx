import { useContext } from "react";
import { Box, InputLabel, FormControl, NativeSelect } from "@mui/material";
import MyContext from "../context/ContextProvider";

export default function DropdownSelectors() {
  const context = useContext(MyContext)!;

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel
            variant="standard"
            htmlFor="level-select"
            shrink
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
            onChange={(event) =>
              context.handleQueryInput(event.target.name, event.target.value)
            }
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
            htmlFor="source-select"
            shrink
            sx={{ margin: "0 1rem" }}
          >
            Quelle
          </InputLabel>
          <NativeSelect
            defaultValue={"-1"}
            inputProps={{
              name: "source",
              id: "source-select",
            }}
            onChange={(event) =>
              context.handleQueryInput(event.target.name, event.target.value)
            }
            sx={{ margin: "2rem 1rem" }}
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
