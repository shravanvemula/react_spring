import React from "react";
import { makeStyles, Typography, Paper, Grid } from "@material-ui/core";
import backgroundImage from "../../../images/Bg-image.png";
import Logo from "../../molecules/_logo/_logo";
import Tagline from "../../molecules/_tagline/_tagline";
import { Link, BrowserRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    fontFamily: "Poppins",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
    fontFamily: "Poppins",
    fontSize: "12px",
    textDecoration: "none",
    color: "#27418b",
  },
  styleTwo: {
    width: "88%",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
  },
  image: {
    background: `linear-gradient(to bottom, rgba(22, 101, 216, 0.37), rgba(22, 101, 216, 0.81)),url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "1600px",
    height: "auto",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formBox: {
    float: "right",
    margin: "250px 178px 0px auto",
    borderRadius: "16px",
    height: "240px",
    width: "444px",

    ["@media (max-width:1024px)"]: {
      marginRight: "100px",
    },
    ["@media (max-width:768px)"]: {
      marginRight: "70px",
    },
  },
  heading: {
    float: "left",
    margin: "19px -4px 17px 30px",
    height: "33px",
    fontFamily: "Poppins",
    fontSize: "24px",
    color: "#333333",
    width: "90%",
  },
  Box: {
    width: "88%",
  },
  helperText: {
    marginTop: "10px",
    marginLeft: "28px",
    color: "grey",
  },
  text: {
    margin: "0px",
    padding: "0px",
    marginLeft: "inherit",
    marginTop: "-40px",
  },
}));

export default function RecoveredPassword() {
  const classes = useStyles();
  const showLogin = () => {};
  return (
    <Grid container component="main" className={classes.root}>
      <Grid
        item
        xs={false}
        sm={12}
        md={12}
        className={classes.image}
        data-testid="backgroundImage"
      >
        <Grid container>
          <Tagline />
          <Grid
            item
            sm={4}
            md={3}
            component={Paper}
            elevation={6}
            className={classes.formBox}
          >
            <Logo />
            <Typography
              className={classes.heading}
              variant="h5"
              data-testid="heading"
            >
              Forgot password ?
            </Typography>
            <div className={classes.Box}>
              <Typography
                variant="caption"
                className={classes.helperText}
                data-testid="helperText"
              >
                <p className={classes.text}>
                  {" "}
                  You’ve been emailed a password reset link.
                </p>
              </Typography>

              <hr className={classes.styleTwo}></hr>
            </div>
            <div className={classes.footer}>
              <Link to="/" data-testid="login-link" className={classes.footer}>
                {"Go to Login"}
              </Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
