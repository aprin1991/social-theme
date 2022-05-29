import {
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import React from "react";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    // color: "#555",
    color: theme.palette.primary.main,
    fontSize: 14,
  },
  category: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: theme.spacing(1),
  },
}));
const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography gutterBottom variant="h6" className={classes.title}>
        Online Friends
      </Typography>
      <AvatarGroup max={5}>
        <Avatar
          alt="Remy Sharp"
          src="https://v4.mui.com//static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://v4.mui.com//static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://v4.mui.com//static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://v4.mui.com//static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com//static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://v4.mui.com//static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://v4.mui.com//static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com//static/images/avatar/8.jpg"
        />
      </AvatarGroup>
      <div style={{ marginTop: 15 }}>
        <Typography gutterBottom variant="h6" className={classes.title}>
          Gallery
        </Typography>
        <ImageList rowHeight={100} className={classes.imageList} cols={2}>
          <ImageListItem>
            <img
              src="https://v4.mui.com/static/images/image-list/morning.jpg"
              alt={"#"}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://v4.mui.com/static/images/image-list/breakfast.jpg"
              alt={"#"}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://v4.mui.com/static/images/image-list/hats.jpg"
              alt={"#"}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://v4.mui.com/static/images/image-list/vegetables.jpg"
              alt={"#"}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://v4.mui.com/static/images/image-list/honey.jpg"
              alt={"#"}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://v4.mui.com/static/images/image-list/mushroom.jpg"
              alt={"#"}
            />
          </ImageListItem>
        </ImageList>
      </div>
      <div style={{ marginTop: 15 }}>
        <Typography gutterBottom variant="h6" className={classes.title}>
          Categories
        </Typography>
        <div className={classes.category}>
          <Link href="#" className={classes.link} variant="body2">
            Sport
          </Link>
          <Link href="#" className={classes.link} variant="body2">
            Food
          </Link>
          <Link href="#" className={classes.link} variant="body2">
            Movies
          </Link>
          <Link href="#" className={classes.link} variant="body2">
            Science
          </Link>
          <Link href="#" className={classes.link} variant="body2">
            Sport
          </Link>
          <Link href="#" className={classes.link} variant="body2">
            Food
          </Link>
          <Link href="#" className={classes.link} variant="body2">
            Movies
          </Link>
          <Link href="#" className={classes.link} variant="body2">
            Science
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Rightbar;
