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
    margin-top: 9px;
`
export const ContentBody = styled.div`
    height: 100vh;
    background-color: #F2F2F2;
`
export const ContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 28px;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 17px;
        color: #BABABA;
        margin-left: 17px;
    }
    p:first-child {
        color: #126BA5;
        font-size: 22px;
    }
`
export const Text = styled.div`
    width: 338px;
    height: 74px;
    margin-left: 17px;
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 12px;
        line-height: 15px;
        color: #666666;
    }
    p:first-child {
        font-size: 19px;
        margin-bottom: 10px;
        margin-top: 18px;
    }
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
export const CheckButton = styled.div`
    button {
        width: 69px;
        height: 69px;
        margin-top: 13px;
        margin-right: 13px;
        margin-bottom: 12px;
        background-color: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
    }
`
export const ImageVector = styled.img``

export const Footer = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 17px;
        color: #52B6FF;
    }
    a {
        text-decoration: none;
    }
`
export const ImageFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
/* export const ImageVector = styled.img`
    position: absolute;
    margin-bottom: 50px;
    margin-left: 10px;
` */