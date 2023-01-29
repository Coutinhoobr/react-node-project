import styled from "styled-components";
import Background from "./assets/background.svg"



export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    height: 100vh;
`

export const Image = styled.img`
    margin-top: 30px;
`

export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    display: flex;
    flex-direction: column;
    padding: 50px 35px;
    height: 100vh;
`

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 80px;
    color: #FFFFFF;
`
export const Label = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: -0.408px;
    margin-left: 15px;
    color: #EEEEEE;
`

export const Input = styled.input`
    width: 342px;
    height: 58px;
    padding: 15px 25px;
    margin-bottom: 34px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: 0 none;
    outline: 0;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
`

export const Button = styled.button`
    width: 342px;
    height: 74px;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    align-items: center;
    color: #FFFFFF;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    &:hover{
        opacity: 80%;
    }
    &:active{
        opacity: 100%;
    }   

`