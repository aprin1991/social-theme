import { Grid } from "@material-ui/core";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { makeStyles } from "@material-ui/styles";
import Add from "./components/Add";
const useStyle = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  rightbar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
function App() {
  const classes = useStyle();
  return (
    <div>
      <Navbar />
      <Grid container className={classes.root}>
        <Grid item sm={2} xs={2}>
          {" "}
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Layout />
        </Grid>
        <Grid item sm={3} className={classes.rightbar}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
