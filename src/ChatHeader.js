import React from 'react'
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function ChatHeader() {
    const avtharNumber = 3;
    return (
        <AppBar elevation={0} position="static" color="default" sx={{ backgroundColor: '#ededed', borderLeft: '5px solid gainsboro', borderLeftWidth: 'thin' }} >
            <Toolbar style={{ minWidth: '100px' }}>
                <IconButton>
                    <Avatar alt="Srikanth Polineni" src={`https://material-ui.com/static/images/avatar/${avtharNumber}.jpg`} />
                </IconButton>
                <Box>
                    <Typography noWrap component="h1" color="textPrimary">
                        Navami Chahal
                    </Typography>
                    <Typography noWrap component="span" variant="body2" color="#919191">
                        last seen today at 7:33 PM
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Box>
                <Box>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
