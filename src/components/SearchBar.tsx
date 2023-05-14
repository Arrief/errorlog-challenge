import { Container, InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { themedInput } from "../styles/ThemedInput";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
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
