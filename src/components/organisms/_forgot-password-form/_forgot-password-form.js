import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Email from "../../molecules/_email-field/_email-field";
import { Link, BrowserRouter, Redirect } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%",
        marginTop: theme.spacing(1)
    },
    submit: {
        textTransform: "capitalize",
        backgroundColor: "#223080"
    },
    footer: {
        textAlign: "center",
        marginTop: "20px",
        fontFamily: "Poppins",
        fontSize: "12px",
        textDecoration: "none"
    },
    forgot: {
        paddingTop: "12px",
        paddingBottom: "20px",
        float: "right",
        fontSize: "12px",
        textAlign: "right",
        textDecoration: "none"
    },
    styleTwo: {
        width: "100%",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)"
    }
}));

const ForgotPasswordForm = ({ handleClick }) => {
    const classes = useStyles();
    const [userEmail, setUserEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [hasInputError, setHasInputError] = React.useState(true);
    const [authenticationError, setAuthenticationError] = React.useState("");
    const [isSubmit, setIsSubmit] = React.useState(false);

    const handleChangeInUserEmail = (event) => {
        event.preventDefault();
        const email = event.target.value;
        setUserEmail(email);
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!re.test(email)) {
            setEmailError("Please enter valid email");
            setHasInputError(true);
        } else {
            setEmailError("");
            setHasInputError(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        //Integration code
        console.log("Redirecting");
        setIsSubmit(true);
    };

    if (isSubmit) {
        return <Redirect to="/recoverd-password" />;
    } else {
        return (
            <form className={classes.form}>
                <Typography color="error" variant="caption">
                    {authenticationError}
                </Typography>
                <Typography
                    style={{ color: "grey" }}
                    variant="caption"
                    data-testid="helperText"
                >
                    To reset your password, please enter the email address of
                    your Todo account.
                </Typography>
                <br></br>
                <br></br>
                <Email
                    onChange={handleChangeInUserEmail}
                    placeHolder="Enter mail"
                    label="Email"
                    data-testid="emailInput"
                    userEmail={userEmail}
                    emailError={emailError}
                />
                <Button
                    data-testid="submit"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={hasInputError ? true : false}
                    onClick={handleSubmit}
                >
                    Reset Password
                </Button>
                <br></br>
                <br></br>
                <hr className={classes.styleTwo}></hr>
                <div className={classes.footer}>
                
                    <Link
                        to="/"
                        data-testid="loginLink"
                        className={classes.footer}
                    >
                        {"Go to Login"}
                    </Link>
                 
                </div>
            </form>
        );
    }
};
export default ForgotPasswordForm;
