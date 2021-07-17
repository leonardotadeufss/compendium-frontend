import React from 'react'
import { Container } from './style'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/assets/logo-compendium.png'


export default function Header() {
    return (
        <Container>
            <Link href="/" passHref>
                <a>
                    <Image src={logo} alt="Logo Compendium RPG" />
                </a>
            </Link>
            <Link href="/contact" passHref>
                <a>
                    <p>Contato</p>
                </a>
            </Link>

        </Container>
    )

};