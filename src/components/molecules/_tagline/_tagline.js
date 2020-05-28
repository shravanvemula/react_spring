import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    remember: {
        fontFamily: "Poppins",
        color: "#ffffff",
        fontWeight: "600",
        ["@media (min-width:1170px)"]: {
            fontSize: "48px",
            margin: "345px 0px 0px 121px",
            width: "559px"
        },
        ["@media (max-width:1169px)"]: {
            fontSize: "34px",
            margin: "345px 0px 0px 80px",
            width: "300px"
        },
        ["@media (max-width:838px)"]: {
            fontSize: "25px",
            margin: "345px 0px 0px 62px",
            width: "200px"
        }
    }
}));

export default function Tagline() {
    const classes = useStyles();
    return (
        <Grid item>
            <Typography
                variant="h5"
                className={classes.remember}
                data-testid="caption"
            >
                Remember everything that matters
            </Typography>
        </Grid>
    );
}