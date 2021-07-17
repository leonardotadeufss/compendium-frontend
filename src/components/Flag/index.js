import React from 'react'
import { Container } from './style'


export default function Flag({ children }) {
    return (
        <Container>
            <p>{children}</p>
        </Container>
    )
}