import React from 'react';
import { Thumbnail } from './style'


export default function Image({ src }) {
    return (
        <Thumbnail alt="Logo da campanha" src={src} />
    )
}