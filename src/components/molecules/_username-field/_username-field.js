import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Typography from "@material-ui/core/Typography"
const useStyles = makeStyles((theme) => ({

    textField: {
        margin: '10px 0 20px 0',
    },
    label: {
        fontFamily: 'Poppins',
        color: '#333333',
        fontSize: '14px',
        paddingBottom: '10px',
    }

}));
const Username = ({ username, onChange, placeHolder, usernameError, label }) => {
    const classes = useStyles();
    const [errorMsg,setErrorMsg] = React.useState(usernameError);
    return (
        <FormControl fullWidth className={classes.textField}>
            <span className={classes.label} data-testid='usernameLabel'>{label}</span>
            <Input
                inputProps={{
                    'data-testid': 'usernameInput'
                }}
                fullWidth
                required
                type='text'
                value={username}
                onChange={onChange}
                onFocus={() => {setErrorMsg("")}}
                onBlur = {() => {setErrorMsg(usernameError)}} 
                placeholder={placeHolder}
            />
            <Typography color="error" variant="caption" data-testid="errorText">
                <br></br>
                {errorMsg}
            </Typography>
        </FormControl>
    );
}

export default Username;
