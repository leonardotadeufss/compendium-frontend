import styled from "styled-components";

const Button = styled.button`  
        background-color: #99582A;
        border-radius: 8px;
        color: #FFF;
        width: 90%;
        border: none;
        padding: 10px;
        font-size: 18px;
        margin-bottom: 20px;
        font-family: inherit;
        cursor: pointer;

        &:hover{
            opacity: 0.9;
            transform: scale(1.01);
        }
`

const ButtonSecondary = styled.button`
        background-color: #99582A;
        border-radius: 45px;
        color: #FFF;
        min-width: 200px;
        border: none;
        padding: 15px 10px;
        font-size: 1.4rem;
        font-family: inherit;
        cursor: pointer;
        display: inline-flex;
        text-align: center;
        justify-content: space-evenly;
       
`


export default Button;
export { ButtonSecondary }