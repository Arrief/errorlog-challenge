import {
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { themedInput } from "../styles/ThemedInput";

// const ThemedSearch = styled(TextField)({
//   "& label.Mui-focused": {
//     color: "var(--theme-darkened)",
//   },
//   "& .MuiInput-underline:after": {
//     borderBottomColor: "var(--theme-color)",
//   },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "var(--theme-color)",
//     },
//     "&:hover fieldset": {
//       borderColor: "var(--theme-color)",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "var(--theme-color)",
//     },
//   },
// });

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {/* <IconButton type="submit" aria-label="search" disabled>
        <SearchIcon style={{ fill: "black" }} />
      </IconButton> */}
      <TextField
        id="search"
        type="text"
        label="Suche"
        variant="standard"
        value={searchTerm}
        onChange={handleChange}
        sx={{ ...themedInput, width: 400, margin: "2rem auto" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon style={{ fill: "black" }} />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}
