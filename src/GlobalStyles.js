import { createStyles, makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles(() => createStyles({
    '@global': {
        '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
        },
        html: {
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
            height: '100%',
            width: '100%'
        },
        body: {
            backgroundColor: '#f4f6f8',
            height: '100%',
            width: '100%'
        },
        a: {
            textDecoration: 'none'
        },
        '#root': {
            height: '100%',
            width: '100%'
        },
        '*::-webkit-scrollbar': {
            width: '0.2em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '4px solid #cccccc'
        },
    }
}));

export default function GlobalStyles() {
    useStyles();
    return null;
}
