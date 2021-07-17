import styled from 'styled-components';

export const Button = styled.button`
    display: block;
    border-radius: 25px;
    width: 25px;
    height: 25px;
    padding: 0;
    margin-left: auto ;
    margin-right: auto ;
    border: none;
    font-size: 20px;
    line-height: 30px;
    transform: ${props =>
        props.state === 'less' ? 'rotate(0deg)' : 'rotate(180deg)'
    };
    cursor: pointer;
    background-color: #f2f2f286;
    color: #432818;
`