import React from 'react';
import Image from 'next/image'
import { Container } from './style'
import spotify from '../../../public/assets/spotify.png'
import youtube from '../../../public/assets/youtube.png'
import twitch from '../../../public/assets/twitch.png'


export default function SocialLink({ src, url }) {
    switch (src) {
        case 'twitch':
            return (
                <Container target="_blank" rel="noreferrer" href={"https://" + url}>
                    <Image src={twitch} alt="Twitch Logo" />
                </Container>
            )
        case 'youtube':
            return (
                <Container target="_blank" rel="noreferrer" href={url}>
                    <Image src={youtube} alt="Youtube Logo" />
                </Container>
            )
        case 'spotify':
            return (
                <Container target="_blank" rel="noreferrer" href={"https://" + url}>
                    <Image src={spotify} alt="Spotify Logo" />
                </Container>
            )

        default:
            break;
    }
}