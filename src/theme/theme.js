import { createTheme } from "@material-ui/core";
import { blue, green, red } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
  },
  myButton: {
    backgroundColor: red[800],
    text: "#fff",
    border: `1px solid ${blue[500]}`,
  },
});
