import React from "react";
import { makeStyles, Typography, Paper, Grid } from "@material-ui/core";
import backgroundImage from "../../../images/Bg-image.png";
import LoginForm from "../../organisms/_login-form/_login-form";
import Logo from "../../molecules/_logo/_logo";
import Tagline from "../../molecules/_tagline/_tagline";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        fontFamily: "Poppins"
    },
    image: {
        background: `linear-gradient(to bottom, rgba(22, 101, 216, 0.37), rgba(22, 101, 216, 0.81)),url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "1600px",
        height: "auto"
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    formBox: {
        float: "right",
        margin: "150px 178px 0px auto",
        borderRadius: "16px",
        height: "580px",
        width: "444px",

        ["@media (max-width:1024px)"]: {
            marginRight: "100px"
        },
        ["@media (max-width:768px)"]: {
            marginRight: "70px"
        }
    },
    heading: {
        float: "left",
        margin: "19px 0px 0px 30px",
        height: "33px",
        fontFamily: "Poppins",
        fontSize: "24px",
        color: "#333333"
    }
}));

export default function Login() {
    const classes = useStyles();
    const showSignup = () => {};
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
                            Log in
                        </Typography>
                        <div className={classes.paper}>
                            <LoginForm handleSignupClick={showSignup} />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}