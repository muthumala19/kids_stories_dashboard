import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function SnackbarAlert({open, message, onClose, severity}) {
    return (
        <Snackbar open={open} autoHideDuration={9000} onClose={onClose}>
            <MuiAlert elevation={9} variant="filled" onClose={onClose} severity={severity}>
                {message}
            </MuiAlert>
        </Snackbar>
    );
}
export default SnackbarAlert;
