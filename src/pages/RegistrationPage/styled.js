import styled from "styled-components";

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img`
    margin-top: 68px;
` 

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px 0;
    position: relative;
    input {
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        padding-left: 11px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 19px;
        color: #dbdbdb;
    }
    button {
        width: 318px;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #FFFFFF;
        position: relative;
    }
    a {
        margin-top: 25px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 13px;
        color: #52B6FF;
    }
`
export const Loading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: ${props => props.isLoading ? 'block' : 'none'};
`