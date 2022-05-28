import { makeStyles } from "@material-ui/core";
import React from "react";
import PostItem from "./PostItem";
const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));
const Posts = () => {
  const classes = useStyle();
  return (
    <div>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
};

export default Posts;
