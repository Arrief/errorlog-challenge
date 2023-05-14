import { useState } from "react";
import { Box, Drawer, IconButton, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WifiIcon from "@mui/icons-material/Wifi";
import ResponsiveDatePicker from "./DatePicker";
import { FilterButton } from "../styles/FilterButton";
import { DrawerHeader } from "../styles/DrawerHeader";
import { themedInput } from "../styles/ThemedInput";
import DropdownSelectors from "./DropdownSelectors";

const drawerWidth = "40%";

const inputStyling = { ...themedInput, margin: "1rem" };

export default function FilterDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      <FilterButton
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
      </FilterButton>

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
        <ResponsiveDatePicker />
        <DropdownSelectors />
        <TextField variant="standard" sx={inputStyling} />
      </Drawer>
    </Box>
  );
}
