import React from 'react';
import { Box, Divider, } from '@material-ui/core';
import SideBarSearch from './SideBarSearch';
import ConversationList from './ConversationList';
import SideBarHeader from './SideBarHeader';

export default function SideBar() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#ededed', width: "400px" }}>
            <SideBarHeader />
            <Divider />
            <SideBarSearch />
            <Divider />
            <ConversationList />
        </Box>
    )
}
