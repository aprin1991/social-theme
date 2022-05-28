import { makeStyles } from "@material-ui/core";
import React from "react";
import Posts from "./components/Posts";
const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));
const Home = () => {
  const classes = useStyle();
  return (
    <div>
      <Posts />
    </div>
  );
};

export default Home;
