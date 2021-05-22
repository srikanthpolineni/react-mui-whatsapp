import React from 'react'
import { Box, InputBase } from '@material-ui/core';
import { experimentalStyled, alpha } from '@material-ui/core/styles'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';

const Search = experimentalStyled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 45,
    backgroundColor: alpha(theme.palette.common.white, 0.75),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.55),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },

}));


const StyledInputBase = experimentalStyled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(0.5)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function ChatInput() {
    return (
        <Box ml={2} mr={2} sx={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
            <SentimentVerySatisfiedIcon sx={{ color: '#919191', marginLeft: '16px' }} />
            <AttachFileIcon sx={{ color: '#919191', marginLeft: '16px' }} />
            <Search sx={{ flexGrow: 1 }}>
                <StyledInputBase
                    placeholder="Type a message"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search >
            <MicIcon sx={{ color: '#919191', marginLeft: '16px' }} />
        </Box>
    )
}
