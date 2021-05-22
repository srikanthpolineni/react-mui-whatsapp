import { Container, Box } from '@material-ui/core'
import React from 'react'

export default function Foreground(props) {
    return (
        <Container maxWidth='lg' sx={{ marginTop: '17px', marginBottom: '20px' }}>
            <Box boxShadow={3} component="div" sx={{ display: 'flex', overflow: 'hidden', backgroundColor: '#fff', height: '100%' }} >
                {props.children}
            </Box>
        </Container>
    )
}
