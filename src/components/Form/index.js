import styled from "styled-components";

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 37.5%;
    flex-direction: column;
    background-color: #FFF;
    border-radius: 18px;
    
    @media(max-width: 900px) {
        width: 95%;
    }

    @media(min-width: 900px) and (max-width: 1200px){
        width: 75%;
    }

    `
const Container = styled.div`
    max-width: 65%;
    display: flex;
    justify-content: space-evenly;
    padding: 70px 0px;
    margin: auto;
    margin-top: 8%;
    background-color: #432818;
    border-radius: 18px;
    flex-direction: row;

    @media(max-width: 900px) {
        flex-direction: column;
        max-width: 95%;
        justify-content: center;
        align-items: center;
        padding: 45px 0px 30px;
        margin-top: 3%;
        margin-bottom: 3%;
    }

    @media(min-width: 900px) and (max-width: 1200px){
        flex-direction: column;
        max-width: 75%;
        justify-content: center;
        align-items: center;
        padding: 45px 0px 30px;
        margin-top: 3%;
        margin-bottom: 3%
    }
`

const TextContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 37.5%;
    color: #ffffff;
    font-size: 32px;

    @media(max-width: 900px) {
        width: 95%;
        font-size: 24px;
        margin-bottom: 20px;
    }

    @media(min-width: 900px) and (max-width: 1200px){
        font-size: 24px;
        width: 75%;
        margin-bottom: 20px;
    }

`



export default Form;

export { Container, TextContainer }