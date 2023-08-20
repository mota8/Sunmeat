import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdapterJalali from '@date-io/date-fns-jalali';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const theme = createTheme({
    typography: {
        direction: 'rtl', // Both here and <body dir="rtl">
        fontSize: 16,
        fontFamily: [
            "IRANSansWeb"
        ].join(",")
    }
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});
const RTL = (props) => {
// console.log(JalaliUtils)
    return (
        
        <ThemeProvider theme={theme}>
            <CacheProvider value={cacheRtl}>
                <LocalizationProvider dateAdapter={AdapterJalali}  >
                    {props.children}
                </LocalizationProvider>
            </CacheProvider>
        </ThemeProvider >
    );
};

export default RTL;
