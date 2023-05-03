import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: red[700],
    },
    secondary: {
      main: red[700],
    },
  },
  //   typography:{
  //     fontFamily:{
  //         ''
  //     }
  //   }
});

export default theme;
