import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyle = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: 500,
    height: 550,
    padding: theme.spacing(2.5),
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      width: "100%vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));
const Add = () => {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const classes = useStyle();
  const handleCreate = () => {
    setOpenAlert(true);
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal className={classes.modal} open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </div>

            <div className={classes.item}>
              <TextField
                label="Description"
                size="small"
                multiline
                rows={4}
                style={{ width: "100%" }}
                variant="outlined"
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-select-currency"
                select
                label="Visibility"
                value="Public"
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">Who can Comment</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 12 }}
                onClick={handleCreate}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleCloseAlert} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
