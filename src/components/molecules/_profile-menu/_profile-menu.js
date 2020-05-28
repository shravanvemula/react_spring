import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router";
import ProfileImage from "../../../images/profile_icon.png";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    float: "right"
  },
  container: {
    float: "right",
    marginRight: "60px",
    marginTop:"20px",
  },
  userSettings:{
    height: '35px',
    fontSize:'14px',
    fontFamily:'Poppins',
    color: '#27418b',
  },
  menu:{
      width:'190px',
      height:'100px',
      borderRadius:'5px',
      border:'solid 1px #dddddd',
      marginRight:'150px',
  },
  styleTwo: {
    width: "100%",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)"
  },
  logout:{
    height: '35px',
    fontFamily:'Poppins',
    fontSize:'14px',
    color:'#858585',

  },
  pending:{
      height:'15px',
      fontFamily:'Poppins',
      fontSize:'10px',
      textAlign:'center',
      backgroundColor:'#eb893a',
  },

}));

const ProfileMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [isLogout, setIsLogout] = React.useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleLogoutClick = (event) => {
    event.preventDefault();
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
    localStorage.setItem(
      "logout",
      true
    );
    localStorage.setItem(
        "login",
          null
      );
    setIsLogout(true);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  if (isLogout) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.container}>
      <Avatar
        onClick={handleToggle}
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        alt="Remy Sharp"
        src={ProfileImage}
      >
        {" "}
      </Avatar>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper className={classes.menu}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem className={classes.userSettings}>User settings <span className={classes.pending}>Coming soon</span></MenuItem>
                  <hr className={classes.styleTwo}></hr>
                  <MenuItem onClick={handleLogoutClick} className={classes.logout}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default ProfileMenu;
