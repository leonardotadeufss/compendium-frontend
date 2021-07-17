import React from 'react'
import { Button } from './style'

export default function Expander({ value, handleClick }) {
    return <Button state={value} onClick={handleClick}>^</Button>
}