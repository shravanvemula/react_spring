import React from "react";
import {
    makeStyles,
    Input,
    FormControl,
    IconButton,
    Typography
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    textField: {
        marginBottom: "0px"
    },
    label: {
        fontFamily: "Poppins",
        color: "#333333",
        fontSize: "12px",
        marginBottom: "10px"
    }
}));

const Password = ({
    onChange,
    userPassword,
    label,
    placeHolder,
    passwordError
}) => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = React.useState(false);
    const [errorMsg,setErrorMsg] = React.useState(passwordError);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl fullWidth className={classes.textField}>
            <span className={classes.label} data-testid="passwordLabel">
                {label}
            </span>
            <Input
                inputProps={{
                    "data-testid": "passwordInput"
                }}
                type={showPassword ? "text" : "password"}
                value={userPassword}
                required
                onChange={onChange}
                placeholder={placeHolder}
                onFocus={() => {setErrorMsg("")}}
                onBlur = {() => {setErrorMsg(passwordError)}} 
                endAdornment={
                    <IconButton style={{padding:'0px'}}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        data-testid="showPasswordIcon"
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                }
            />
            <Typography color="error" variant="caption" data-testid="errorText">
                <br></br>
                {errorMsg}
            </Typography>
        </FormControl>
    );
};

export default Password;