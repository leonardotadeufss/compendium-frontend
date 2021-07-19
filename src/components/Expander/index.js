import React, { useState } from 'react'
import { Button } from './style'

export default function Expander({ value, handleClick }) {
    const [isClicked, setClick] = useState(false)


    return <Button state={value} onClick={() => {
        setClick(!isClicked)
        handleClick()
    }}>{isClicked ? "Fechar" : "Ver mais"}
    </Button>
}