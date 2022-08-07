import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: { flexGrow: "1", cursor: "pointer" },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Recursive Component
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
