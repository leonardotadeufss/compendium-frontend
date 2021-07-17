import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 25px;
    padding: 0;
    width: 100%;
    padding: 10px 0px;
    background-color: #432818;
    display: inline-grid;
    grid-template-columns: 20% 40%;
    justify-content: end;


    a {
        text-decoration: none;
        color: #FFF;
        margin: auto;
        justify-self: end;

    }
    a>p{
        background-color: #995E2A;
        padding: 8px 12px;
        border-radius: 8px;

        &:hover{
            opacity: 0.9;
            transform: scale(1.03);
        }
    }
`
