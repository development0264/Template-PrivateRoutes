import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Button, Icon, IconButton, InputAdornment } from '@mui/material';
import { ContentWrapper, TextFieldWrapper } from './style';
import { useDispatch } from 'react-redux';

const INITIAL_DATA = {
    email: "",
    password: ""
}

const Login = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState(INITIAL_DATA)
    const [password, setPassword] = useState(false)
    const showPasswordIcon = () => {
        setPassword(!password)
    }
    const handleSubmit = () => {
        alert("hello")
    }
    const handleChange = (e) => {
        console.log("e-------->", e.name, e.value)

    }
    return (
        <>
            <Box>
                <ContentWrapper>
                    Login:
                    <TextFieldWrapper>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}>
                            <TextField id="outlined-basic" label="Email" variant="outlined" value={data.email} onChange={handleChange} />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}>
                            <TextField
                                id="filled-password-input"
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
                                onChange={handleChange}
                                autoComplete="current-password"
                            />
                        </Box>
                    </TextFieldWrapper>
                    <Box style={{ margin: "40px 38%" }} >
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    </Box>
                </ContentWrapper>
            </Box>
        </>
    )
}

export default Login