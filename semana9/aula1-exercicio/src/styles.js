import styled from 'styled-components';

export const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 50%;
margin: 0 auto;
`

export const Title = styled.h1 `
font-size: 3em;
`

export const Input = styled.input `
    width: 70%;
    height: 45px;
    font-size: 1.1rem;
    ::placeholder {
        font-style: italic;
        opacity: 0.3;
    }
`

export const ListItem = styled.li `
    list-style: none;
    font-size: 1.2rem;
`

export const BtnDel = styled.button `
    border: none;
    background-color: transparent;
    color: darkred;
    font-size: 1em;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`

export const BtnAdd = styled.button `
    border: none;
    height: 50px;
    border-radius: 2px;
    color: black;
    font-size: 1em;
    :hover {
        cursor: pointer;
        background-color: lightgrey;
        transform: scale(1.1);
    }
`