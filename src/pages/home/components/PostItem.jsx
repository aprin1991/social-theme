import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  media: {
    height: "250px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
    [theme.breakpoints.up("xl")]: {
      height: 350,
    },
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));
const PostItem = () => {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="my post"
          image="https://images.pexels.com/photos/129574/pexels-photo-129574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quibusdam iste vel facere totam dicta eaque temporibus iure
            repellendus, reiciendis pariatur, culpa omnis recusandae excepturi
            maxime adipisci quia ab illo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatem quibusdam iste vel facere totam dicta
            eaque temporibus iure repellendus, reiciendis pariatur, culpa omnis
            recusandae excepturi maxime adipisci quia ab illo.{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          share
        </Button>
        <Button size="small" color="primary">
          Laen more
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostItem;
