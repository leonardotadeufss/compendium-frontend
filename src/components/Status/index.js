import React from 'react';
import { Container } from './style'


export default function Status({ children }) {
    return (
        <Container>
            <h1>{children}</h1>
        </Container>
    )
}