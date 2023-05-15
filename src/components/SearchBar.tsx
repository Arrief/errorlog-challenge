import { Container, InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { themedInput } from "../styles/ThemedInput";
import MyContext from "../context/ContextProvider";

export default function SearchBar() {
  const context = useContext(MyContext)!;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    context.handleQueryInput(event.target.name, event.target.value);
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <TextField
        id="search"
        type="text"
        name="volltext"
        label="Volltextsuche"
        variant="standard"
        value={context.userQueries.volltext}
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
