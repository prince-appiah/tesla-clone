import {
  Box,
  Button,
  makeStyles,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import React from "react";
// import bgImage from "../assets/bg1.jpeg";

export const Section = ({
  title,
  subtitle,
  bgImage,
  leftBtnText,
  rightBtnText,
}) => {
  const classes = useStyles({ bgImage });

  return (
    <Box className={classes.root}>
      {/*     Header      */}
      <Box className={classes.header}>
        <Typography className={classes.headerText} variant="h1">
          {title}
        </Typography>
        <Typography className={classes.subtitle} variant="body">
          {subtitle}
        </Typography>
      </Box>
      <Box className={classes.buttonGroup}>
        <Button
          className={classes.leftButton}
          variant="contained"
          color="primary"
          disableElevation
          disableRipple
        >
          {leftBtnText}
        </Button>
        <Button
          className={classes.rightButton}
          variant="contained"
          color="secondary"
          disableElevation
          disableRipple
        >
          {rightBtnText}
        </Button>
      </Box>
      <Box>
        {/* !TODO: Add animation to icon*/}

        <SvgIcon fontSize="large" className={classes.chevronDown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid Meet"
            // width="40"
            // height="40"
          >
            <path d="M100 5.5c0 1.3-.5 2.6-1.5 3.5L50 57.5 1.5 9c-2-2-2-5.1 0-7.1s5.1-2 7.1 0L50 43.4 91.5 1.9c2-2 5.1-2 7.1 0 .9 1 1.4 2.3 1.4 3.6z" />
          </svg>
        </SvgIcon>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundImage: (props) => `url(${props.bgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    flexGrow: 1,
    paddingTop: theme.spacing(15),
  },
  headerText: {
    fontWeight: theme.typography.fontWeightMedium,
    paddingBottom: theme.spacing(2),
  },
  subtitle: {
    textAlign: "center",
    fontWeight: theme.typography.fontWeightLight,
  },
  buttonGroup: {
    display: "flex",
    marginBottom: theme.spacing(4),
    // paddingTop: theme.spacing(45),
    // flexDirection: "column",
  },
  leftButton: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(2),
    // cursor: "pointer",
  },
  rightButton: {
    padding: theme.spacing(1),
    // cursor: "pointer",
  },
  chevronDown: {
    // height: "40px",
    marginBottom: "50px",
  },
}));
