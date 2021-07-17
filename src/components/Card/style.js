import styled from 'styled-components';


export const Container = styled.div`

    width: 360px;
    background-color: rgba(187, 148, 87, 0.31);
    position: relative;
    border-radius: 5px;
    box-shadow: 2px 2px  rgba(0, 0, 0, 0.25);
    padding-bottom: 10px;
    margin-bottom: 50px;

    &:hover{
        transition: 200ms ease-in-out;
        transform: scale(1.01);
    }

    @media(max-width: 980px) {
        margin-left: auto;
        margin-right: auto;
    }

`

export const CardWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 65%;
    display: grid; 
    grid-template-columns: repeat(auto-fill, 360px);
    grid-gap: 1rem;
    justify-content: space-between; 
    align-items: flex-start;

    @media(max-width: 980px) {
        grid-template-columns: 100vw;
        margin: 0;
        width: max-content;
        align-items: center;
    }

`