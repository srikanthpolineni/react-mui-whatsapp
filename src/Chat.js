import React from 'react';
import { Box, Divider } from '@material-ui/core';
import ChatHeader from './ChatHeader';
import ChatMain from './ChatMain';
import ChatInput from './ChatInput';

export default function Chat(props) {

    const { converation } = props;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#ededed', flexGrow: 1, }}>
            <ChatHeader />
            <Divider />
            <ChatMain />
            <ChatInput />
        </Box>
    )
}
