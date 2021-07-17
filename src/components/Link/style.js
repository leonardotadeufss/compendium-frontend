import styled from 'styled-components';


export const Container = styled.a`
    cursor: pointer;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    height: 55px;
    background-color:  #f2f2f286;
    border-left: 1px solid #a8a8a87a;
    border-right: 1px solid #a8a8a87a;


    &:hover{
        background-color: #ffffff81;
    }
`

export const LinkWrapper = styled.div`
    display: table;
    table-layout: fixed;
    width: 100%;
    margin-bottom: 15px;
`