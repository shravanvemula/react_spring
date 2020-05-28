import  React from 'react';
import logoImage from '../../../images/logo.png';
import { makeStyles,Grid} from '@material-ui/core';


const useStyles =  makeStyles((theme) =>({

    logo: {
        margin : '30px 10px 0px 30px',  
        width:'32px',
        height:'28px',
      },
    title:{
        paddingTop:'30px',
        height:'28px',
        fontWeight:'600',
        width:'51px',
        fontSize:'20px',
        color:'#333333',
    },
  
}));

const Logo = () => {
    const classes=useStyles();
    return ( 
        <Grid container >
            <Grid item>
                <img src={logoImage} className={classes.logo} alt="Logo"  data-testid='logoImage'/>
            </Grid> 
            <Grid item className={classes.title} data-testid='title'>
                    Todo
            </Grid>
        </Grid>
     );
}
 
export default Logo;








