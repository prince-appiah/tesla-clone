import { createMuiTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const customTheme = createMuiTheme({
  typography: {
    fontFamily: "Rubik",
    htmlFontSize: "14px",
    allVariants: {
      lineHeight: "21px",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": "Rubik",
      },
    },
    MuiButton: {
      label: {
        fontSize: "12px",
        color: grey[50],
      },
      containedPrimary: {
        borderRadius: "100px",
        height: "40px",
        backgroundColor: "rgba(23,26,32,0.8)",
        width: "256px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "uppercase",
        "&:hover": {
          backgroundColor: "rgba(23,26,32,0.8)",
        },
      },
      containedSecondary: {
        borderRadius: "100px",
        height: "40px",
        backgroundColor: "#ffffff",
        color: "rgba(23,26,32,0.8)",
        width: "256px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "uppercase",
        "& > *": {
          color: "rgba(23,26,32,0.8)",
        },
        "&:hover": {
          backgroundColor: "#ffffff",
        },
      },
      root: {
        borderRadius: "100px",
        height: "40px",
        backgroundColor: "rgba(23,26,32,0.8)",
        width: "256px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "uppercase",
        "&:hover": {
          backgroundColor: "rgba(23,26,32,0.8)",
        },
      },
    },
  },
  palette: {
    text: {
      primary: "#393c41",
      secondary: "#5c5e62",
    },
  },
});
