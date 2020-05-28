import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Password from "../../molecules/_password-field/_password-field";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%",
        marginTop: "-10px"
    },
    submit: {
        textTransform: "capitalize",
        backgroundColor: "#223080",
        marginTop: "5%"
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

const ResetPasswordForm = ({ handleSignupClick }) => {
    const classes = useStyles();

    const [userPassword, setPassword] = React.useState("");
    const [userConfirmPassword, setConfirmPassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    const [confirmPasswordError, setConfirmPasswordError] = React.useState("");
    const [hasInputError, setHasInputError] = React.useState(true);
    const [samePassError, setSamePassError] = React.useState(true);
    const [authenticationError, setAuthenticationError] = React.useState("");
    const [isSubmit, setIsSubmit] = React.useState(false);

    const handleChangeInPassword = (event) => {
        event.preventDefault();
        const password = event.target.value;
        setPassword(password);
        if (password.length < 8) {
            setPasswordError("Enter a valid password");
            setHasInputError(true);
        } else {
            setPasswordError("");
            if (
                userConfirmPassword.length > 0 &&
                confirmPasswordError.length === 0
            ) {
                setHasInputError(false);
            }
        }
    };

    const handleChangeInConfirmPassword = (event) => {
        event.preventDefault();
        const password = event.target.value;
        setConfirmPassword(password);
        if (password.length < 8) {
            setConfirmPasswordError("Enter a valid password");
            setHasInputError(true);
        } else {
            setConfirmPasswordError("");
            if (userPassword.length > 0 && passwordError.length === 0) {
                setHasInputError(false);
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userPassword === userConfirmPassword) {
            setSamePassError(false);
            setIsSubmit(true);
            setAuthenticationError("");
            console.log("Redirecting");
        } else {
            setAuthenticationError("Password doesn't match");
            setSamePassError(true);
        }
    };

    if (isSubmit) {
        return <Redirect to="/temporary-page" />;
    } else {
        return (
            <div>
                <form className={classes.form}>
                    <Typography variant="caption" data-testid="helperText1" style={{ marginTop: "20px" }}>
                        Please enter a new password for your todo account
                    </Typography>
                    <br></br>
                    <div style={{ marginTop: "20px" }}>
                        <Password
                            onChange={handleChangeInPassword}
                            userPassword={userPassword}
                            label="Enter new password"
                            dataTestId="passwordInput"
                            passwordError={passwordError}
                        />
                    </div>
                    <Password
                        onChange={handleChangeInConfirmPassword}
                        userPassword={userConfirmPassword}
                        placeHolder=""
                        dataTestId="password2"
                        label="Confirm your new password"
                        passwordError={confirmPasswordError}
                    />
                    <Typography
                        style={{ color: "grey", fontSize: "12px" }}
                        variant="caption"
                        data-testid="helperText2"
                    >
                        Your password must be at 8 characters long. Avoid common
                        words or patterns.
                    </Typography>
                    <br></br>
                    <div>
                        <Typography
                            color="error"
                            variant="caption"
                            data-testid="errorText"
                        >
                            {authenticationError}
                        </Typography>
                    </div>
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
                        Reset password
                    </Button>
                </form>
            </div>
        );
    }
};
export default ResetPasswordForm;
