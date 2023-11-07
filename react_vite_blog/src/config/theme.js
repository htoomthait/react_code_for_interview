import { createTheme } from '@mui/material/styles';
import { lightGreen, orange, red } from '@mui/material/colors';

const websiteTheme = createTheme({
    palette: {
        primary: {
        main: lightGreen.A700,
        },
        secondary: {
        main: orange[700],
        },
        error: {
            main : red[500]
        }
    },
    typography:{
        fontSize:12
    }
});

export {websiteTheme};