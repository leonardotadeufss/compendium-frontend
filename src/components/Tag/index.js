import React from 'react';
import { Container } from './style'


export default function Tag({ title, size, OnClick, children }) {
    return (
        <Container size={size} onClick={() => OnClick(title)}>
            <p>
                {title}
            </p>
            {children}
        </Container>
    )

}