import styled from 'styled-components';

export const ContainerSemana = styled.div `
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`

export const DivDeCadaDia = styled.div `
    border: 1px solid black;
    height: 75vh;
    text-align: center;
    padding: 10px;
    font-weight: bold;
`