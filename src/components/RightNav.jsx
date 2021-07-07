import { Box, makeStyles, Typography } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import React from "react";

export const RightNav = ({ status, onBurgerClicked }) => {
  const classes = useStyles(status);

  return (
    <Box className={classes.root} id="burgerNav">
      <Box className={classes.closeButton}>
        <CloseOutlined onClick={onBurgerClicked} />
      </Box>
      <Typography component="li">Model S</Typography>
      <Typography component="li">Model Y</Typography>
      <Typography component="li">Existing Inventory</Typography>
      <Typography component="li">Used Inventory</Typography>
      <Typography component="li">Trade In</Typography>
      <Typography component="li">Cybertruck</Typography>
      <Typography component="li">Roadster</Typography>
      <Typography component="li">Semi</Typography>
      <Typography component="li">Charging</Typography>
      <Typography component="li">Powerwall</Typography>
      <Typography component="li">Commercial Energy</Typography>
      <Typography component="li">Utilities</Typography>
      <Typography component="li">Test Drive</Typography>
      <Typography component="li">Find Us</Typography>
      <Typography component="li">Support</Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    position: "fixed",
    width: "300px",
    top: 0,
    right: 0,
    bottom: 0,
    overflowY: "auto",
    transform: `${(props) =>
      props.status ? "translateX(0)" : "translateX(100%)"}`,
    // transform: "translateX(100%)",
    transition: "transform 0.2s ease-in",
    padding: theme.spacing(2),
    listStyle: "none",
    "& > li": {
      padding: "12px 12px",
      cursor: "pointer",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& > li:hover": {
      background: "#5c5e62",
      cursor: "pointer",
      borderRadius: theme.shape.borderRadius * 5,
    },
  },
  closeButton: {
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer",
  },
}));
