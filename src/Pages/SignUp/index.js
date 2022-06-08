import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { ContentWrapper, Input } from './style';
import { Button, FormHelperText, Grid, IconButton, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from "formik";
import { SignupSchema } from '../../Utility/Validation/FormValidation';

const SignUp = () => {
    const [password, setPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const showPasswordIcon = () => {
        setPassword(!password)
    }
    const showConfirmPasswordIcon = () => {
        setConfirmPassword(!confirmPassword)
    }

    const validateLoginClick = (e) => {
        navigate('/Login')
    }
    const handleSubmit = () => {
        alert("Succesfully submitted!!  ");
        navigate("/Login");
    }
    return (
        <>
            <ContentWrapper>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        phoneNumber: "",
                        password: "",
                        confirmPassword: ""
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={() => {
                        handleSubmit();
                    }}
                >
                    {({ errors, handleChange, values }) => (
                        <Form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    Sign Up:
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth id="outlined-basic" name="firstName" label="First Name" variant="outlined" value={values.firstName} onChange={(e) => { handleChange(e); }} error={errors.firstName} />
                                    <FormHelperText error>{errors.firstName}</FormHelperText>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth id="outlined-basic" name="lastName" label="Last Name" variant="outlined" value={values.lastName} onChange={(e) => { handleChange(e); }} error={errors.lastName} />
                                    <FormHelperText error>{errors.lastName}</FormHelperText>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth id="outlined-basic" name="email" label="Email" variant="outlined" value={values.email} onChange={(e) => { handleChange(e); }} error={errors.email} />
                                    <FormHelperText error>{errors.email}</FormHelperText>
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
                                        value={values.password}
                                        type={password ? "text" : "password"}
                                        onChange={(e) => { handleChange(e); }}
                                        error={errors.password}
                                    />
                                    <FormHelperText error>{errors.password}</FormHelperText>
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
                                        value={values.confirmPassword}
                                        type={confirmPassword ? "text" : "password"}
                                        onChange={(e) => { handleChange(e); }}
                                        error={errors.confirmPassword}
                                    />

                                    {errors.confirmPassword && <FormHelperText error>{errors.confirmPassword}</FormHelperText>}
                                </Grid>
                                <Grid item xs={12} justifyContent="space-between" sx={{ display: 'flex' }}>
                                    <Button variant="contained" type="submit">Sign Up</Button>
                                    <Button variant="text" onClick={validateLoginClick}> Already have an Account?</Button>
                                </Grid>
                                <Grid item xs={12}></Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </ContentWrapper>
        </>
    )
}

export default SignUp