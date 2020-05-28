import React from 'react';
import { Button, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Password from '../../molecules/_password-field/_password-field';
import Username from '../../molecules/_username-field/_username-field';
import { Redirect, Link, BrowserRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: '0px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'capitalize',
    backgroundColor: '#223080',
  },
  footer: {
    textAlign: 'center',
    marginTop: '20px',
    fontFamily: 'Poppins',
    fontSize: '12px',
  },
  styleLink: {
    textDecoration: 'none',
    color: '#27418b',

  },
  styleTwo: {
    width: '100%',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
  },
  termsAndConditions: {
    fontFamily: 'Poppins',
    fontSize: '40px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0px',

  },

}));


const SecondarySignUpForm = ({ handleLoginClick }) => {

  const classes = useStyles();
  const [username, setUsername] = React.useState('');
  const [userPassword, setPassword] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [hasInputError, setHasInputError] = React.useState(true);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const handleChangeInUsername = (event) => {
    const username = event.target.value;
    setUsername(username);
    var re = /^[A-Za-z]+([\ A-Za-z]+)*/;
    if (!re.test(username)) {
      setUsernameError('Please enter a valid name');
      setHasInputError(true);
    }
    else {
      setUsernameError('');
      setHasInputError(false);
    }

  }
  const handleChangeInPassword = (event) => {
    const password = event.target.value;
    setPassword(password);
    if (password.length < 8) {
      //getByText("Your password must be atleast 8 characters long")
      setPasswordError('Your password must be atleast 8 characters long');
      setHasInputError(true);
    }
    else {
      setPasswordError('');
      setHasInputError(false);
    }
  }
  const handleChangeInCheckbox = (event) => {
    event.preventDefault();
    if (isChecked) {
      setIsChecked(false);
    }
    else {
      setIsChecked(true);
    }

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
  }
  if (isSubmit) {
    return <Redirect to="/temporaryPage" />;
  }

  return (
    <form className={classes.form}>

      <br></br>
      <Username
        onChange={handleChangeInUsername}
        userName={username}
        placeHolder="Your name"
        label="Enter name"
        usernameError={usernameError}
      />

      <Password
        onChange={handleChangeInPassword}
        userPassword={userPassword}
        placeHolder="Enter password"
        label="Password"
        passwordError={passwordError}

      />
      <Typography
        style={{ color: "grey", fontSize: "12px" }}
        variant="caption"
        data-testid="helperText2"
      >
        Your password must be atleast 8 characters long. 
                    </Typography>

      <Button
        data-testid='submit'
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleSubmit}
        disabled={hasInputError || !isChecked ? true : false}>
        Sign up

            </Button>

      <FormControlLabel
        data-testid='termsAndConditions'
        control={<Checkbox value="terms" color="primary" onClick={handleChangeInCheckbox} checked={isChecked} data-testid='checkbox' />}
        label={<span
          style={{ fontSize: '12px' }} className={classes.termsAndConditions}>
          Agree to our
          <Link to="/temporary-page" variant="body2" className={classes.styleLink}> {"Terms of Service"} </Link>
                      and
                       <Link to="/temporary-page" variant="body2" className={classes.styleLink}> {"Privacy Policy"} </Link>
        </span>}

      />

      <hr className={classes.styleTwo}></hr>
      <div className={classes.footer}>
        <span>{"Already signed up?"}

          <Link
            to="/"
            data-testid="loginLink"
            className={classes.styleLink}

          >
            {"Go to login"}
          </Link>

        </span>
      </div>
    </form>
  );
}

export default SecondarySignUpForm;