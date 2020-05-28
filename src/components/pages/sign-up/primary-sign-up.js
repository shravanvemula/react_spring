import React from 'react';
import { makeStyles, Typography, Paper, Grid } from '@material-ui/core';
import backgroundImage from '../../../images/Bg-image.png';
import PrimarySignUpForm from '../../organisms/_signup-form/_primary-sign-up-form';
import Logo from '../../molecules/_logo/_logo';
import Tagline from '../../molecules/_tagline/_tagline';
import SecondarySignUp from './secondary-sign-up';
import Redirect from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    fontFamily: 'Poppins',
  },
  image: {
    background: `linear-gradient(to bottom, rgba(22, 101, 216, 0.37), rgba(22, 101, 216, 0.81)),url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '1600px',
    height: '1023px',
    mixBlendMode: 'hard-light',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  formBox: {
    float: "right",
    margin: "200px 178px 0px auto",
    borderRadius: "16px",
    height: "fit-content",
    width: "444px",

    ["@media (max-width:1024px)"]: {
      marginRight: "100px",
    },
    ["@media (max-width:768px)"]: {
      marginRight: "70px",
    },
  },
  heading: {
    float: 'left',
    margin: '20px 0px 0px 30px',
    height: '33px',
    fontFamily: 'Poppins',
    fontSize: '24px',
    color: '#333333',
  },


}));

export default function PrimarySignUp() {

  const classes = useStyles();
  const [isShowLogin, setIsShowLogin] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState('');
  const [hasInputError, setHasInputError] = React.useState(true);
  const [emailError, setEmailError] = React.useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  }

  const showLogin = () => {

    setIsShowLogin(true);
  }

  const handleChangeInUserEmail = (event) => {
    event.preventDefault();
    const email = event.target.value;
    setUserEmail(email);
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(email)) {
      setEmailError("Please enter valid email");

      setHasInputError(true);
    }
    else {
      setEmailError("");
      setHasInputError(false);
    }

  }
  if (isSubmitted === true) {
    return <SecondarySignUp userEmail={userEmail} />;
  }
  else if (isShowLogin === true) {
    return <Redirect to="/" />
  }
  else{
    return (
  
  
    <Grid container component="main" className={classes.root}>
      <Grid
        item xs={false}
        md={12}
        className={classes.image}
        data-testid="backgroundImage"
      >
        <Grid
          container
        >
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
              Sign Up
              </Typography>
            <div className={classes.paper}>
              <PrimarySignUpForm
                userEmail={userEmail}

                hasInputError={hasInputError}
                handleLoginClick={showLogin}
                handleSubmitClick={handleSubmit}
                handleChangeInUserEmail={handleChangeInUserEmail}
                emailError={emailError}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
}


