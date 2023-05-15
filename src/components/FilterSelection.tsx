import { ChangeEvent, FormEvent, useContext, useState } from "react";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WifiIcon from "@mui/icons-material/Wifi";
import ResponsiveDatePicker from "./DatePicker";
import { ThemedButton } from "../styles/ThemedButton";
import { DrawerHeader } from "../styles/DrawerHeader";
import { themedInput } from "../styles/ThemedInput";
import DropdownSelectors from "./DropdownSelectors";
import MyContext from "../context/ContextProvider";

const drawerWidth = "30%";

const inputStyling = { ...themedInput, margin: "1rem" };

export default function FilterDrawerRight() {
  const context = useContext(MyContext)!;
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Update state object with user queries
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    context.handleQueryInput(event.target.name, event.target.value);
  };

  // By updating the filters, useEffect in App.tsx will be triggered to send a new fetch requert to the server with the updated URL
  const handleQuerySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    context.setFilter(context.userQueries);
    // Close the filter Drawer & reset all input fields
    setOpen(false);
    event.currentTarget.reset();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      <ThemedButton
        aria-label="open filter menu"
        onClick={handleDrawerOpen}
        sx={{
          order: "1",
          borderRadius: "25px",
          marginRight: "5rem",
          width: "max-content",
        }}
      >
        <WifiIcon /> Filter
      </ThemedButton>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <form
          onSubmit={handleQuerySubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          <Typography
            variant="subtitle2"
            gutterBottom
            component="h5"
            sx={{ fontWeight: "bold" }}
          >
            Filteroptionen (alle Felder leer = alle Daten)
          </Typography>
          <ResponsiveDatePicker />
          <TextField
            id="number-customerid"
            name="idCustomer"
            label="ID Kunde/Firma"
            type="number"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            sx={inputStyling}
          />
          <TextField
            id="number-userid"
            name="idUser"
            label="ID User"
            type="number"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            sx={inputStyling}
          />
          <DropdownSelectors />
          <TextField
            id="number-limits"
            name="limit"
            label="Limit Ergebnisse"
            type="number"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            sx={inputStyling}
          />
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <ThemedButton name="filter-query" type="submit">
              Update
            </ThemedButton>
          </Container>
        </form>
      </Drawer>
    </Box>
  );
}
