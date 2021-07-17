import React from 'react';
import { Container } from './style'

export default function Text({ children }) {
    return (
        <Container>
            <p>{children}</p>
        </Container>
    )
}