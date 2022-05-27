import { createTheme } from "@material-ui/core/styles";

const orange900 = "#FF7A00";
const orange800 = "#FF8F29";
const orange700 = "#FF8D51";
const orange600 = "#FF9E6A";
const orange500 = "#FFAE83";
const orange400 = "#FFBE9B";
const orange300 = "#FFCEB4";
const orange200 = "#FFDFCD";
const orange100 = "#FFEFE6";
const orange50 = "#FFFAF1";

/**
 *  HUD Brown Colors
 */

const brown900 = "#844733";
const brown800 = "#9E553D";
const brown700 = "#B86348";
const brown600 = "#C27A62";
const brown500 = "#CC907C";
const brown400 = "#D6A696";
const brown300 = "#E1BCB0";
const brown200 = "#EBD3CB";
const brown100 = "#F5E9E5";
const brown50 = "#F9F2EF";

/**
 *  Main CoreUI Colors
 */

const blue900 = "#2992E2";
const blue800 = "#53B7FF";
const blue700 = "#69C0FE";
const blue600 = "#6DB7FC";
const blue500 = "#7FC0FC";
const blue400 = "#91C9FD";
const blue300 = "#A3D2FD";
const blue200 = "#B6DBFD";
const blue100 = "#C8E4FE";
const blue50 = "#DAEDFE";

const green900 = "#3FA70A";
const green800 = "#64C334";
const green700 = "#72CD44";
const green600 = "#82D359";
const green500 = "#91D86E";
const green400 = "#A1DE82";
const green300 = "#B1E397";
const green200 = "#C0E9AC";
const green100 = "#D0EEC1";
const green50 = "#E0F4D5";

const yellow900 = "#FFE51A";
const yellow800 = "#FFE72A";
const yellow700 = "#FFEB4B";
const yellow600 = "#FFEE6C";
const yellow500 = "#FFF28D";
const yellow400 = "#FFF49D";
const yellow300 = "#FFF6AD";
const yellow200 = "#FFF9CE";
const yellow100 = "#FFFDEF";

const red900 = "#D01818";
const red800 = "#DC2323";
const red700 = "#E53939";
const red600 = "#F05454";
const red500 = "#F57070";
const red400 = "#F58686";
const red300 = "#FBB6B6";
const red200 = "#FDCECE";
const red100 = "#FFE3E3";

const purple900 = "#141644";
const purple800 = "#3c58ca";
const purple700 = "#3728A5";
const purple600 = "#402FB6";
const purple500 = "#5848C5";
const purple400 = "#6C5DD3";
const purple300 = "#8274E3";
const purple200 = "#9487EE";
const purple100 = "#D5CFFF";
const purple50 = "#E6E2FF";

const white = "#ffffff";

export const theme = createTheme({
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1280,
      lg: 1440,
      mac: 1780,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: 0,
  },
  DailyOffer: {
    modal: {
      titleColor: "#FFF6B0",
      titleShadow: "0 2px 0 rgba(0, 0, 0, 0.33)",
      dailyPackBg: "rgba(255, 255, 255, 0.7)",
      dailyPackColor: "#057373",
      discountColor: "#ff3c25",
      discountShadow: "0 2px 0 rgba(0, 0, 0, 0.4)",
      infoIconColor: "#1468ad",
    },
  },
  palette: {
    primary: {
      main: blue700,
    },
    secondary: {
      main: green800,
    },
    background: {
      main: white,
    },
    blue: {
      main: blue900,
      A800: blue800,
      A700: blue700,
      A600: blue600,
      A500: blue500,
      A400: blue400,
      A300: blue300,
      A200: blue200,
      A100: blue100,
      A50: blue50,
    },
    green: {
      main: green900,
      A800: green800,
      A700: green700,
      A600: green600,
      A500: green500,
      A400: green400,
      A300: green300,
      A200: green200,
      A100: green100,
      A50: green50,
    },
    orange: {
      main: orange900,
      A800: orange800,
      A700: orange700,
      A600: orange600,
      A500: orange500,
      A400: orange400,
      A300: orange300,
      A200: orange200,
      A100: orange100,
      A50: orange50,
    },
    yellow: {
      main: yellow900,
      A800: yellow800,
      A700: yellow700,
      A600: yellow600,
      A500: yellow500,
      A400: yellow400,
      A300: yellow300,
      A200: yellow200,
      A100: yellow100,
    },
    brown: {
      main: brown900,
      A800: brown800,
      A700: brown700,
      A600: brown600,
      A500: brown500,
      A400: brown400,
      A300: brown300,
      A200: brown200,
      A100: brown100,
      A50: brown50,
    },
    red: {
      main: red900,
      A800: red800,
      A700: red700,
      A600: red600,
      A500: red500,
      A400: red400,
      A300: red300,
      A200: red200,
      A100: red100,
    },
    purple: {
      main: purple900,
      A800: purple800,
      A700: purple700,
      A600: purple600,
      A500: purple500,
      A400: purple400,
      A300: purple300,
      A200: purple200,
      A100: purple100,
      A50: purple50,
    },
    text: {
      main: "#fff",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
  },
  elevation: {
    100: "0 10px 10px rgba(0, 0, 0, 0.1)",
    200: "0 2px 10px rgba(0, 0, 0, 0.1)",
    300: "0px 20px 30px rgba(20, 22, 68, 0.04)",
    400: "0px 20px 30px rgba(20, 22, 68, 0.06)",
    500: "0px 30px 40px -6px rgba(20, 22, 68, 0.04)",
    600: "0px 30px 40px -10px rgba(20, 22, 68, 0.04)",
    700: "0px 40px 40px -10px rgba(20, 22, 68, 0.04)",
    800: "0px 40px 40px -10px rgba(20, 22, 68, 0.08)",
  },

  overrides: {
    MuiSkeleton: {
      root: {
        backgroundColor: "#2A2A2D",
      },
      text: {
        backgroundColor: "#FFEFE6",
        backdropFilter: "blur(8px)",
        borderRadius: 10,
      },
      rect: {
        backgroundColor: "#FFEFE6",
        backdropFilter: "blur(8px)",
        borderRadius: 10,
      },
      circle: {
        backgroundColor: "#FFEFE6",
        backdropFilter: "blur(8px)",
      },
      wave: {
        "&::after": {
          background:
            "linear-gradient(90deg, rgba(249,242,239,1) 0%, rgba(225,188,176,1) 50%, rgba(249,242,239,1) 100%)",
        },
      },
    },
    MuiDialog: {
      paper: {
        overflow: "visible",
        overflowY: "visible",
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#47474B",
        fontSize: 10,
        borderRadius: 4,
        color: "#C3BDBA",
      },
      arrow: {
        color: "#47474B",
      },
    },
  },
});
