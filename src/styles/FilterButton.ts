import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FilterButton = styled(Button)<ButtonProps>(() => ({
  color: "white",
  backgroundColor: "var(--theme-color)",
  margin: "3rem 0",
  "& > *": {
    color: "white",
    paddingRight: ".5rem",
  },
  "&:hover": {
    backgroundColor: "var(--theme-darkened)",
    boxShadow: "var(--shadow-light)",
    transform: "scale(1.1)",
  },
}));
