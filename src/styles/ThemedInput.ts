export const themedInput = {
  "& label.Mui-focused": {
    color: "var(--theme-darkened)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--theme-color)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--theme-color)",
    },
    "&:hover fieldset": {
      borderColor: "var(--theme-color)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--theme-color)",
    },
  },
};
