import styled from 'styled-components';


export const TitleStyle = styled.h1`
    background-color: ${props =>
        props.variant === "Light" ? '#995E2A' : '#432818'
    };
    border-top-left-radius: ${props =>
        props.variant === "Light" ? '5px' : '0px'
    };
    border-top-right-radius:${props =>
        props.variant === "Light" ? '5px' : '0px'
    };
    font-size: ${props =>
        props.variant === "Light" ? '1.25rem' : 'inherit'
    };
    color: #FFF;
    padding: 15px 5px;
    font-family: inherit;
    text-align: center;

`