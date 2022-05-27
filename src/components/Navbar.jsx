import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import { Cancel, Notifications } from "@material-ui/icons";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  search: {
    alignItems: "center",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    padding: `0 ${theme.spacing(1)}px`,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    display: "flex",
    marginLeft: 0,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "#fff",
    marginLeft: theme.spacing(1),
    flexGrow: 1,
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    display: "block",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  cancelButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyle({ open });
  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Aprin Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Aprin
        </Typography>
        <div className={classes.search}>
          <SearchIcon />
          <InputBase placeholder="Search…" className={classes.input} />
          <Cancel
            className={classes.cancelButton}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className={classes.icons}>
          <SearchIcon
            onClick={() => setOpen(true)}
            className={classes.searchButton}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Hamed ostovar" src="/assets/images/avatar.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
