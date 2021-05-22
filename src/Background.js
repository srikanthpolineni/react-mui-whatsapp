import { experimentalStyled } from '@material-ui/core'
import React from 'react'



const MultiColoredDiv = experimentalStyled('div')(
    ({ theme }) => ({
        background: 'linear-gradient(to bottom, darkcyan 0%, darkcyan 13%, gainsboro 13%, gainsboro 100%)',
        display: 'flex',
        height: '100%',
        width: '100%',
    })
);
export default function Background(props) {
    return (
        <MultiColoredDiv>
            {props.children}
        </MultiColoredDiv>
    )
}
