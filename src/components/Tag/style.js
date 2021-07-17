import styled from 'styled-components';

export const Container = styled.div`
    background-color: #995E2A;
    color: #FFF;
    border-radius: 45px;
    font-size: ${props =>
        props.size === "small" ? '0.9rem' : '1.4rem'
    };
    font-family: inherit;
    width: ${props =>
        props.size === "small" ? "max-content" : '200px'
    };
    height: ${props =>
        props.size === "small" ? "max-content" : '75px'
    };
    padding: ${props =>
        props.size === "small" ? "5px 8px" : '0px'
    };
    line-height: ${props =>
        props.size === "small" ? "normal" : '75px'
    };
    text-align: center;
    display: inline-flex;
    justify-content: space-around;
    margin: 0px 10px;
    cursor: pointer;

    @media(max-width: 1200px) {
        height: max-content;
        width: 150px;
        font-size: 1.2rem;
        margin-bottom: 15px;
    }
`;

export const TagWrapper = styled.div`
    padding: ${props =>
        props.size === "small" ? "20px 0px 15px" : '50px 0px'
    };
    text-align: center;


    @media(max-width: 1200px) {
        display: flex;
        padding: 20px 0px 50px;
        justify-content: space-around;
        flex-wrap: wrap;
  }
`
