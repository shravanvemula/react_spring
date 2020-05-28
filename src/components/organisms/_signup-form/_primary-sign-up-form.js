import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import Email from '../../molecules/_email-field/_email-field';


import { Redirect, Link, BrowserRouter } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(-2, 0, 2),
    textTransform: 'none',
    backgroundColor: '#223080',
  },
  footer: {

    textAlign: 'center',
    marginTop: '20px',
    fontFamily: 'Poppins',
    fontSize: '12px',
  },
  forgot: {
    paddingTop: '12px',
    paddingBottom: '20px',
    float: 'right',
    width: '107px',
    height: '17px',
    fontSize: '12px',
    textAlign: 'right',
    color: '#27418b'
  },
  styleTwo: {
    width: '100%',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
  },
  styleLink: {
    textDecoration: 'none',
    color: '#27418b',

  },

}));


const PrimarySignUpForm = ({ handleLoginClick,
  handleSubmitClick, handleChangeInUserEmail, userEmail, hasInputError, emailError }) => {
  const classes = useStyles();



  return (
    <form className={classes.form}>

      <br></br>
      <Email
        onChange={handleChangeInUserEmail}
        placeHolder="Enter mail"
        label="Email"
        userEmail={userEmail}
        emailError={emailError}

      />
      <Button
        data-testid='submitButton'
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleSubmitClick}
        disabled={hasInputError ? true : false}>
        Sign up with email
            </Button>

      <hr className={classes.styleTwo}></hr>
      <div className={classes.footer}>
        <span>{"Already signed up? "}

          <Link
            to="/"
            data-testid="loginLink"
            className={classes.styleLink}
          >
            {" Go to login"}
          </Link>

        </span>
      </div>
    </form>

  );
}

export default PrimarySignUpForm;