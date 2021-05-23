import React from 'react'
import { AppBar, Avatar, Box, IconButton, Toolbar } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
export default function SideBarHeader({ openProfile }) {
    const avtharNumber = 1;
    return (
        <AppBar elevation={0} position="static" color="default" sx={{ backgroundColor: '#ededed', width: "400px", borderRight: '5px solid gainsboro', borderRightWidth: 'thin' }} >
            <Toolbar style={{ minWidth: '100px' }}>
                <IconButton onClick={() => openProfile(true)}>
                    <Avatar alt="Srikanth Polineni" src={`https://material-ui.com/static/images/avatar/${avtharNumber}.jpg`} />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                    <IconButton>
                        <ChatIcon />
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
