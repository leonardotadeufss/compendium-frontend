import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: -30px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 30px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-end;
    -ms-flex-align: start;
    align-items: flex-end;


    p{
        width: 20%;
        z-index: 1;
        text-align: center;
        padding: 10px 0px;
        font-family: inherit;
        font-size: 1.25rem;
        background-color: #fff;
        border-bottom-left-radius: 25%;
    }
`

