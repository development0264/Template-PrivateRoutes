import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Button, FormControlLabel, FormHelperText, Grid, Icon, IconButton, InputAdornment, Radio, RadioGroup, Typography } from '@mui/material';
import { ContentWrapper, Input } from './style';
import { useDispatch } from 'react-redux';
import { INITIAL_DATA } from '../../Redux/Actions/Types';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from "formik";
import { LoginEmailSchema, LoginNumberSchema } from '../../Utility/Validation/FormValidation';
import { requestUserName } from '../../Redux/Actions/commonAction';

const Login = () => {
    const [loginType, setLoginType] = useState("Email")
    const [password, setPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showPasswordIcon = () => {
        setPassword(!password)
    }

    const handleLoginType = (e) => {
        setLoginType(e.target.value);
    }

    const handleSignUpClick = () => {
        navigate("/SignUp")

    }

    const [data, setData] = useState(INITIAL_DATA)
    const handleSubmit = (values) => {
        console.log("values", values.email)
        alert("Succesfully submitted!!");
        dispatch(requestUserName(values.email))
        navigate("/admin/dashboard");
    }
    return (
        <>
            <ContentWrapper>
                {loginType === "Email" && (<> <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={LoginEmailSchema}
                    onSubmit={(values) => {
                        handleSubmit(values);
                    }}
                >
                    {({ errors, handleChange, values, handleReset }) => (
                        < Form >
                            {console.log("userdata---->", values)}
                            <Grid container spacing={1} justifyContent="center" alignItems="center">
                                <Grid item xs={12}>
                                    Login With:
                                    <RadioGroup
                                        aria-labelledby="demo-error-radios"
                                        name="Login Type"
                                        value={loginType}
                                        onChange={(e) => { handleLoginType(e); handleReset(); }}
                                        style={{ display: "flex", flexDirection: "row" }}
                                    >
                                        <FormControlLabel value="Email" control={<Radio />} label="Email ID" />
                                        <FormControlLabel value="Number" control={<Radio />} label="Mobile Number" />
                                    </RadioGroup>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth id="outlined-basic" name="email" label="Email" variant="outlined" value={values.email} onChange={(e) => { handleChange(e); }} error={errors.email} />
                                    <FormHelperText error>{errors.email}</FormHelperText>
                                </Grid>
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
                                        value={values.password}
                                        type={password ? "text" : "password"}
                                        onChange={(e) => { handleChange(e); }}
                                        error={errors.password}
                                    />
                                    <FormHelperText error>{errors.password}</FormHelperText>
                                </Grid>
                                <Grid item xs={12} justifyContent="space-between" sx={{ display: 'flex' }}>
                                    <Button variant="contained" type="submit">Login</Button>
                                    <Button variant="text" onClick={handleSignUpClick}> Do not have an account?</Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik></>)}
                {loginType === "Number" && (<><Formik
                    initialValues={{
                        password: "",
                        phoneNumber: "",
                    }}
                    validationSchema={LoginNumberSchema}
                    onSubmit={() => {
                        handleSubmit();
                    }}
                >
                    {({ errors, handleChange, values, handleReset }) => (
                        < Form >
                            {console.log("userdata---->", values)}
                            <Grid container spacing={1} justifyContent="center" alignItems="center">
                                <Grid item xs={12}>
                                    Login With:
                                    <RadioGroup
                                        aria-labelledby="demo-error-radios"
                                        name="Login Type"
                                        value={loginType}
                                        onChange={(e) => { handleLoginType(e); handleReset(); }}
                                        style={{ display: "flex", flexDirection: "row" }}
                                    >
                                        <FormControlLabel value="Email" control={<Radio />} label="Email ID" />
                                        <FormControlLabel value="Number" control={<Radio />} label="Mobile Number" />
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Input fullWidth
                                    id="contact phone number"
                                    label="Phone Number"
                                    name="phoneNumber"
                                    type="number"
                                    value={values.number}
                                    onChange={(e) => { handleChange(e); }} error={errors.phoneNumber}
                                />
                                <FormHelperText error>{errors.phoneNumber}</FormHelperText>
                            </Grid>
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
                                    value={values.password}
                                    type={password ? "text" : "password"}
                                    onChange={(e) => { handleChange(e); }}
                                    error={errors.password}
                                />
                                <FormHelperText error>{errors.password}</FormHelperText>
                            </Grid>
                            <Grid item xs={12} justifyContent="space-between" sx={{ display: 'flex' }}>
                                <Button variant="contained" type="submit">Login</Button>
                                <Button variant="text" onClick={handleSignUpClick}> Do not have an account?</Button>
                            </Grid>
                        </Form>
                    )}
                </Formik></>)}

            </ContentWrapper>
        </>
    )
}

export default Login;
