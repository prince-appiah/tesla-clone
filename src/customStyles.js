import { createMuiTheme } from "@material-ui/core";

export const customTheme = createMuiTheme({
  typography: {
    htmlFontSize: "14px",
    allVariants: {
      lineHeight: "21px",
    },
  },
  palette: {
    text: {
      primary: "#393c41",
      secondary: "#5c5e62",
    },
  },
});
