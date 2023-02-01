import styled, { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;
        background-color: #00045F;
    }
`

export const Title = styled.div`
    font-size: 6rem;
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
    color: #FEFFFF;
`

export const Input = styled.input`
    width: 70rem;
    height: 4rem;
    display: flex;
    margin: auto;
    margin-bottom: 1.5rem;

    font-size: 2rem;
`

export const BottomBtn = styled.button`
    width: 20rem;
    height: 5rem;
    display: flex;
    margin: auto;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;

    font-size: 2rem;
    color: #00045F;
`

export const Padding = styled.div`
    margin: 4rem;
`