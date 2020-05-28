import React from "react";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    textField: {
        marginBottom: "20px"
    },
    label: {
        fontFamily: "Poppins",
        color: "#333333",
        fontSize: "12px",
        paddingBottom: "10px"
    }
}));

const Email = ({ userEmail, onChange, label, placeHolder, emailError }) => {
    const classes = useStyles();
    const [errorMsg,setErrorMsg] = React.useState(emailError);
    return (
        <FormControl fullWidth className={classes.textField}>
            <span className={classes.label} data-testid="emailLabel">
                {label}
            </span>
            <Input
                inputProps={{
                    "data-testid": "emailInput"
                }}
                onFocus={() => {setErrorMsg("")}}
                onBlur = {() => {setErrorMsg(emailError)}} 
                fullWidth
                required
                type="text"
                value={userEmail}
                onChange={onChange}
                placeholder={placeHolder}
            />

            <Typography color="error" variant="caption" data-testid="errorText">
                <br></br>
                {errorMsg}
            </Typography>
        </FormControl>
    );
};
export default Email;