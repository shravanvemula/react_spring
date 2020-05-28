import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Password from "../../molecules/_password-field/_password-field";
import Email from "../../molecules/_email-field/_email-field";
import { Link, BrowserRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    textTransform: "capitalize",
    backgroundColor: "#223080",
    marginTop: "20px",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
    fontFamily: "Poppins",
    fontSize: "12px"
  },
  forgot: {
    paddingTop: "12px",
    paddingBottom: "20px",
    float: "right",
    fontSize: "12px",
    textAlign: "right",
    textDecoration: "none",
    color: "#27418b"
  },
  styleTwo: {
    width: "100%",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)"
  },
  signupLink: {
    textDecoration: "none",
    color: "#27418b"
  },
  error: {
    textAlign: "center",
    fontSize: "14px"
  }
}));

const LoginForm = ({ handleSignupClick }) => {
  const classes = useStyles();
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
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
      if (passwordError.length === 0 && userPassword.length > 0) {
        setHasInputError(false);
      }
    }
  };
  const handleChangeInPassword = (event) => {
    event.preventDefault();
    const password = event.target.value;
    setPassword(password);
    if (password.length < 8) {
      setPasswordError("Your password must be atleast 8 characters long");
      setHasInputError(true);
    } else {
      setPasswordError("");
      if (emailError.length === 0 && userEmail.length > 0) {
        setHasInputError(false);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginObj = {
      username: userEmail,
      password: userPassword
    };

    fetch(process.env.REACT_APP_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginObj)
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((result) => {
            console.log("result:", result);
            setAuthenticationError("");
            setIsSubmit(true);
            localStorage.setItem(
              "login",
              JSON.stringify({
                login: true,
                token: result
              })
            );
          });
        } else {
          setAuthenticationError("Invalid credentials");
          console.log("Setting error as true.");
        }
      })
      .catch((err) => {
        setAuthenticationError("Network Error");
        console.log("Network error : Invalid Token");
      });
  };
  if (isSubmit) {
    return <Redirect to="/home" />;
  }


  return (
  
    <div>
      
      <Typography
        color="error"
        className={classes.error}
        variant="caption"
        data-testid="errorText"
      >
       { authenticationError} 
      </Typography>
      <form className={classes.form}>
        <br></br>
        <Email
          onChange={handleChangeInUserEmail}
          placeHolder="Enter mail"
          label="Email"
          userEmail={userEmail}
          emailError={emailError}
        />
        <Password
          onChange={handleChangeInPassword}
          userPassword={userPassword}
          placeHolder="Enter password"
          label="Password"
          passwordError={passwordError}
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
          Sign In
        </Button>

        <Link
          data-testid="forgotPassword"
          to="/forgot-password"
          className={classes.forgot}
        >
          {"Forgot password?"}
        </Link>
    
        <hr className={classes.styleTwo}></hr>
        <div className={classes.footer}>
          <span>
            Don't have an account?
           
            <Link
              to="/sign-up"
              data-testid="signupLink"
              className={classes.signupLink}
            >
              {"  Sign Up"}
            </Link>
           
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
