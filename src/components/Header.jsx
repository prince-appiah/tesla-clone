import { Box, makeStyles, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import logo from "../assets/tesla-logo.svg";
import { RightNav } from "./RightNav";

export const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
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
        <Typography component="a">Shop</Typography>
        <Typography component="a">Account</Typography>
        <MenuIcon
          className={classes.menuIcon}
          onClick={() => setBurgerOpen(true)}
        />
      </Box>
      <RightNav
        status={burgerOpen}
        onBurgerClicked={() => setBurgerOpen(false)}
      />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.drawer,
    minHeight: "60px",
    padding: "0 20px",
  },
  logo: { width: "120px" },
  menuLinks: {
    display: "flex",
    "& h5": {
      color: theme.palette.text.primary,
      padding: "0 10px",
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
    alignItems: "center",
    "& a": {
      fontWeight: theme.typography.fontWeightMedium,
      padding: theme.spacing(2),
    },
    "& :hover": {
      cursor: "pointer",
    },
  },
  menuIcon: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(4),
  },
}));
