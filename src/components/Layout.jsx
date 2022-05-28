import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import Home from "../pages/home/Home";
const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(9),
    },
  },
}));
const Layout = () => {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Home />{" "}
    </Container>
  );
};

export default Layout;
