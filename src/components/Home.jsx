import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { Section } from "./Section";

export const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Section
        title="Model S"
        subtitle="Watch the Plaid Delivery Event Livestream"
        bgImage="/images/bg1.jpeg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        subtitle="Order online for Touchless Delivery"
        bgImage="/images/bg2.jpeg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        subtitle="Order online for Touchless Delivery"
        bgImage="/images/bg3.jpeg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        subtitle="Order online for Touchless Delivery"
        bgImage="/images/bg4.jpeg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lower Cost Solar Panels in America"
        subtitle="Money-back guarantee"
        bgImage="/images/bg5.jpeg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        subtitle="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        bgImage="/images/bg6.jpeg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        // subtitle="Order online for Touchless Delivery"
        bgImage="/images/bg7.jpeg"
        leftBtnText="Shop Now"
        // rightBtnText="Existing Inventory"
      />
    </Box>
  );
};

const useStyles = makeStyles(() => ({ root: {} }));
