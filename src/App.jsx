import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Header />
        <Home />
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(1),
    height: "100vh",
    width: "100%",
  },
}));

export default App;
