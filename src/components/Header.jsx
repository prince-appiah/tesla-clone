import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import logo from "../assets/tesla-logo.svg";

export const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {/* Logo */}
      <Box className={classes.logo}>
        <a href="/">
          <img src={logo} alt="tesla-logo" />
        </a>
      </Box>
      {/* Menu links */}
      <Box className={classes.menuLinks}>
        <Typography variant="h5">Model S</Typography>
        <Typography variant="h5">Model 3</Typography>
        <Typography variant="h5">Model X</Typography>
        <Typography variant="h5">Model Y</Typography>
        <Typography variant="h5">Solar Roof</Typography>
        <Typography variant="h5">Solar Panels</Typography>
      </Box>
      {/* Trailing */}
      <Box className={classes.trailing}>
        <h5>Shop</h5>
        <h5>Account</h5>
        <h5>Menu</h5>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "90px",
  },
  menuLinks: {
    display: "flex",
    "& h5": {
      //   paddingLeft: theme.spacing(1),
      //   paddingRight: theme.spacing(1),
      color: theme.palette.text.primary,
      padding: theme.spacing(1),
      marginRight: theme.spacing(1),
      borderRadius: "100px",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& :hover": {
      backgroundColor: "#f5f5f5",
      cursor: "pointer",
    },
  },
  trailing: {
    display: "flex",
  },
}));
