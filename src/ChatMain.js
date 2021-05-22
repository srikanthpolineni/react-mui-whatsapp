import { Box } from '@material-ui/core';
import React from 'react';
import bg from './bg.png';
export default function ChatMain() {
    return (
        <Box sx={{
            display: 'flex', flexGrow: 1, backgroundColor: 'rgba(229,221,213,1)'
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundImage: 'url(' + bg + ')', opacity: 0.1, flexGrow: 1, }}>

            </Box>
        </Box>
    )
}
