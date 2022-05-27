import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Button, FormControl, FormControlLabel, FormHelperText, Grid, Icon, IconButton, InputAdornment, Link, Radio, RadioGroup, Typography } from '@mui/material';
import { ContentWrapper, Input } from './style';
import { useDispatch } from 'react-redux';

const INITIAL_DATA = {
    email: "",
    password: "",
    confirmPassword: "",
    number: null
}
const FORM_DATA = {
    Login: true,
    Signup: false
}


const Login = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState(INITIAL_DATA);
    const [form, setForm] = useState(FORM_DATA);
    const [error, setError] = useState(INITIAL_DATA);
    const [loginType, setLoginType] = useState("Email")
    const [password, setPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const numberRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    const showPasswordIcon = () => {
        setPassword(!password)
    }
    const showConfirmPasswordIcon = () => {
        setConfirmPassword(!confirmPassword)
    }
    const handleLoginType = (e) => {
        setLoginType(e.target.value);
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError({ ...error, email: null, password: null, confirmPassword: null });
    }
    const handleLoginClick = (e) => {
        setForm({ ...form, Login: true, Signup: false })
        setData({ ...data, email: null, password: null, confirmPassword: null });
        setError(error => ({ ...error, email: null, password: null, confirmPassword: null }));
    }
    const handleSignUpClick = () => {
        setForm({ ...form, Login: false, Signup: true });
        setData({ ...data, email: null, password: null, confirmPassword: null });
        setError(error => ({ ...error, email: null, password: null, confirmPassword: null }));
    }
    const handlePassword = (e) => {
        if (e.target.name === "password") {
            let password = e.target.value;
            if (!password) {
                setError(error => ({ ...error, password: "Please enter Password!" }));
            }
            else if (passwordRegex.test(password)) {
                setError(error => ({ ...error, password: null }));
            }
            else {
                setError(error => ({ ...error, password: "Password must contain Min. 8 characters, 1 letter, 1 number and 1 special character!", confirmPassword: null }));
                if (password === data.confirmPassword) {
                    setError(error => ({ ...error, confirmPassword: null }));
                }
                else {
                    setError(error => ({ ...error, confirmPassword: "Confirm Password must be same as password!" }));
                }
            }
        }
        if (e.target.name === "confirmPassword") {
            let password = e.target.value;
            if (!password) {
                setError({ ...error, confirmPassword: "Please enter Password first!" });
            }
            else if (password === data.password) {
                setError({ ...error, confirmPassword: null });
            }
            else {
                setError({ ...error, confirmPassword: "Confirm Password must be same as password!" })
            }
        }
    }
    const validateEmail = (e) => {
        let email = e.target.value;
        if (!email) {
            setError({ ...error, email: "Please enter your Email!" });
        }
        else if (emailRegex.test(email)) {
            setError({ ...error, email: null });
        }
        else {
            setError({ ...error, email: "Please enter your correct Email!" })
        }
    }
    const handleSignUp = () => {
        if (!data.email) {
            setError(error => ({ ...error, email: "Please enter your Email!" }));
        }
        if (!data.password) {
            setError(error => ({ ...error, password: "Please enter your password!" }));
        }
        if (!data.confirmPassword) {
            setError(error => ({ ...error, confirmPassword: "Please fill Email and Password First!" }));
        }
    }
    const handleLogin = () => {
        if (!data.email) {
            setError(error => ({ ...error, email: "Please enter your Email!" }));
        }
        if (!data.password) {
            setError(error => ({ ...error, password: "Please enter your password!" }));
        }
    }
    const validateNumber = (e) => {
        let number = e.target.value;
        if (!number) {
            setError(error => ({ ...error, number: "Please enter your Number!" }));
        }
        else if (numberRegex.test(e.target.value)) {
            console.log("sda")
            setError(error => ({ ...error, number: null }));
        }
        else {
            setError(error => ({ ...error, number: "Please enter a valid Number!" }));
        }
    }

    return (
        <>
            <ContentWrapper>
                {form.Signup && (<>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            Sign Up:
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="outlined-basic" name="email" label="Email" variant="outlined" value={data.email} onChange={(e) => { handleChange(e); validateEmail(e); }} error={error.email} />
                            <FormHelperText error>{error.email}</FormHelperText>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="filled-password-input"
                                name="password"
                                InputProps={{
                                    endAdornment:
                                        (
                                            <InputAdornment position="end" onClick={showPasswordIcon}>
                                                <IconButton>
                                                    {password ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                }}
                                label="Password"
                                value={data.password}
                                type={password ? "text" : "password"}
                                onChange={(e) => { handleChange(e); handlePassword(e); }}
                                error={error.password}
                            />
                            <FormHelperText error>{error.password}</FormHelperText>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="filled-password-input"
                                name="confirmPassword"
                                InputProps={{
                                    endAdornment:
                                        (
                                            <InputAdornment position="end" onClick={showConfirmPasswordIcon}>
                                                <IconButton>
                                                    {confirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                }}
                                label="Confirm Password"
                                value={data.confirmPassword}
                                type={confirmPassword ? "text" : "password"}
                                onChange={(e) => { handleChange(e); handlePassword(e); }}
                                error={error.confirmPassword}
                            />
                            <FormHelperText error>{error.confirmPassword}</FormHelperText>
                        </Grid>
                        <Grid item xs={12} justifyContent="space-between" sx={{ display: 'flex' }}>
                            <Button variant="contained" onClick={handleSignUp}>Sign Up</Button>
                            <Button variant="text" onClick={handleLoginClick}> Already have an Account?</Button>
                        </Grid>
                        <Grid item xs={12}> </Grid>
                    </Grid>
                </>
                )}
                {form.Login && (<>
                    <Grid container spacing={1} justifyContent="center" alignItems="center">
                        <Grid item xs={12}>
                            Login With:
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="Login Type"
                                value={loginType}
                                onChange={handleLoginType}
                                style={{ display: "flex", flexDirection: "row" }}
                            >
                                <FormControlLabel value="Email" control={<Radio />} label="Email ID" />
                                <FormControlLabel value="Number" control={<Radio />} label="Mobile Number" />
                            </RadioGroup>
                        </Grid>
                        {loginType === "Email" && (<>   <Grid item xs={12}>
                            <TextField fullWidth id="outlined-basic" name="email" label="Email" variant="outlined" value={data.email} onChange={(e) => { handleChange(e); validateEmail(e); }} error={error.email} />
                            <FormHelperText error>{error.email}</FormHelperText>
                        </Grid></>)}
                        {loginType === "Number" && (<> <Grid item xs={12}>
                            <Input fullWidth
                                id="contact phone number"
                                label="Number"
                                name="number"
                                type="number"
                                value={data.number}
                                onChange={(e) => { handleChange(e); validateNumber(e) }} error={error.number}
                            />
                            <FormHelperText error>{error.number}</FormHelperText>
                        </Grid></>)}
                        <Grid item xs={12}>
                            <TextField fullWidth
                                id="filled-password-input"
                                name="password"
                                InputProps={{
                                    endAdornment:
                                        (
                                            <InputAdornment position="end" onClick={showPasswordIcon}>
                                                <IconButton>
                                                    {password ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                }}
                                label="Password"
                                value={data.password}
                                type={password ? "text" : "password"}
                                onChange={(e) => { handleChange(e); handlePassword(e); }}
                                error={error.password}
                            />
                            <FormHelperText error>{error.password}</FormHelperText>
                        </Grid>
                        <Grid item xs={12} justifyContent="space-between" sx={{ display: 'flex' }}>
                            <Button variant="contained" onClick={handleLogin}>Login</Button>
                            <Button variant="text" onClick={handleSignUpClick}> Do not have an account?</Button>
                        </Grid>
                    </Grid>
                </>)}
            </ContentWrapper>
        </>
    )
}

export default Login