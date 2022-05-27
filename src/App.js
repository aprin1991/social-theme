import { Grid } from "@material-ui/core";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
}));
function App() {
  const classes = useStyle();
  return (
    <div>
      <Navbar />
      <Grid container className={classes.root}>
        <Grid item sm={2}>
          {" "}
          <Leftbar />
        </Grid>
        <Grid item sm={7}>
          <Layout />
        </Grid>
        <Grid item sm={3}>
          <Rightbar />
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
}

export default App;
