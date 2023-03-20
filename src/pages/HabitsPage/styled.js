import styled from "styled-components";

export const Header = styled.div`
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
export const Logo = styled.img`
    margin-left: 18px;
    margin-right: 191px;
    margin-bottom: 10px;
`
export const Foto = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    margin-top: 9px;
`
export const ContentBody = styled.div`
    height: 100vh;
    background-color: #F2F2F2;
`
export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 22px;
        color: #126BA5;
        margin-top: 28px;
        margin-left: 17px;
    }
    button {
        width: 40px;
        height: 35px;
        border-radius: 4px;
        border: 1px solid #D5D5D5;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 26px;
        margin-top: 22px;
        margin-right: 18px;
    }
`
export const Text = styled.div`
    width: 338px;
    height: 74px;
    margin-left: 17px;
    margin-top: 28px;
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 17px;
        line-height: 22px;
        color: #666666;
    }
`
export const FormContainer = styled.form`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        margin-top: 18px;
        padding-left: 11px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 19px;
        color: #dbdbdb;
    }
`

export const ButtonsArea = styled.div`
    margin-top: 8px;
    margin-bottom: 29px;
    margin-left: -75px;
    button {
        width: 30px;
        height: 30px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        color: #d4d4d4;
        background-color: #FFFFFF;
        margin-right: 4px;
    }
`

export const CancelAndSave = styled.div`
    margin-left: 140px;
    button:first-child {
        border: none;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 15px;
        color: #52B6FF;
        margin-right: 23px;
        background-color: transparent;
    }
    button {
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        color: #FFFFFF;
        border-radius: 4px;
        border: 1px solid #D5D5D5;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 15px;
        margin-bottom: 15px;
    }
`
export const Loading = styled.div`
    position: absolute;
    top: 43.9%;
    left: 82%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: ${props => props.isLoading ? 'block' : 'none'};
`

export const HabitsArea = styled.div`
    margin-top: 20px;
`

export const Habit = styled.div`
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: auto;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`
export const TextAndButtons = styled.div`
   display: flex;
   flex-direction: column;
   p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 19px; 
        color: #666666;
        margin-left: 15px;
        margin-top: 13px;
    }
    button {
        
    }
`
export const TrashButton = styled.div`
    button {
        border: none;
        background-color: #FFFFFF;
    }
`
export const TrashImage = styled.img`
    width: 13px;
    height: 15px;
    margin-top: 11px;
    margin-right: 10px;
`
export const Footer = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 17px;
        color: #52B6FF;
        background-color: transparent;
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const ImageCircle = styled.img`
    width: 91px;
    height: 91px;
    margin-bottom: 50px;
`
export const ImageText = styled.img`
    position: absolute;
    margin-bottom: 50px;
`
export const ImageVector = styled.img`
    position: absolute;
    margin-bottom: 50px;
    margin-left: 10px;
`