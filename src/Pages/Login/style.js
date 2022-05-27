import { Box, FormHelperText, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const ContentWrapper = styled(Box)({
    padding: "20px",
    width: '30vw',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    border: "4px solid black",
    borderRadius: "9px"
});

export const Input = styled(TextField)(({ theme }) => ({
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
        display: "none",
    },
    "& input[type=number]": {
        MozAppearance: "textfield",
    },
}));