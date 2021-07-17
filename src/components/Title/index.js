import React from 'react'
import { TitleStyle } from './style'


export default function Title({ children, variant }) {
    return (
        <TitleStyle variant={variant}>{children}</TitleStyle>
    )
}