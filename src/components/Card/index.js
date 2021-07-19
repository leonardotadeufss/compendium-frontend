import React, { useState } from 'react';
import SocialLink from '../Link';
import Tag from '../Tag';
import Title from '../Title';
import { LinkWrapper } from '../Link/style'
import { Container, SkelletonContainer } from './style'
import Text from '../Text';
import { TagWrapper } from '../Tag/style';
import Image from '../Thumbnail';
import Status from '../Status';
import Expander from '../Expander';



export default function Card({ children, OnClick }) {
    const [clicked, setClick] = useState(false);
    const { avatar, name, creator, youtubeLink, resume, twitchLink, spotifyLink, status, tags } = children;

    function handleClick() {
        setClick(!clicked)
    }

    const src = avatar;


    return (
        <Container >
            <Title variant={'Light'}>{creator}</Title>
            <Image src={src} />
            <Status>{status}</Status>
            <Title>{name}</Title>
            {clicked && <Text>{resume}</Text>}
            <TagWrapper size="small">
                {tags.map(tag => <Tag title={tag} key={tag} size="small" OnClick={OnClick} />)}
            </TagWrapper>
            {clicked && <LinkWrapper>
                {youtubeLink && <SocialLink src='youtube' url={youtubeLink} />}
                {spotifyLink && <SocialLink src='spotify' url={spotifyLink} />}
                {twitchLink && <SocialLink src='twitch' url={twitchLink} />}
            </LinkWrapper>}
            <Expander handleClick={handleClick} value={clicked ? "less" : ""} />

        </Container>
    )
}

