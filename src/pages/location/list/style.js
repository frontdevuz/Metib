import { Button } from "antd";
import styled from "styled-components";

export const ButtonAnt  = styled(Button)`
    display: none;
    @media(max-width:430px){
        display: block;
    }
`

export const ButtonAnt2  = styled(Button)`
    display: none;
    @media(max-width:430px){
        display: block;
        z-index: 11;
        position: absolute;
        top: 100px;
        left: 0px;
        background-color: white;
        box-shadow: 0px 0px 10px #909090;
    }
`

export const Container = styled.div`
    width: 550px;
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 1;
    min-height: 100vh;
    left: 0;
    top: 0;
    background-color: rgba(255,255,255,0.8);
    transition: 1s;
    @media(max-width:570px){
        width: 100%;
    }
    @media(max-width:430px){
        position: fixed;
        left: ${p=>p.Show ? 0 : "-550px"};
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    padding-top: 90px;
`;

export const Box = styled.div`
    width: 100%;
    padding: 10px;
    gap: 10px;
    display: flex;
`

export const Input = styled.input`
    width: 380px;
    height: 40px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 10px;
    padding: 7px;
    outline: none;
    border: none    ;
    @media(max-width:430px){
        width: 100%;
    }
`

export const ButtonMy = styled.button`
    width: 120.74853515625px;
    height: 40px;
    border-radius: 10px;
    background-color: #65B389;
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    color: white;
    cursor: pointer;
    @media(max-width:430px){
        width: 100%;
        display: none;
    }
`

export const ClinicsPlace = styled.div`
    padding: 10px;
    overflow: scroll;
    height: 78vh;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 5px;
    }
    
    
    
    &::-webkit-scrollbar-thumb {
        background-color: #65B389;
    }
`

export const Card = styled.div`
    margin-top: 10px;
`
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15px;
    @media(max-width:430px){
        flex-direction: column;
        align-items: center;
    }
`
export const CardLeft = styled.div`
    width: 40%;
    position: relative;
    @media(max-width:430px){
        width: 100%;
    }
`
export const CardLeft1 = styled.div`
    width: 40%;
    @media(max-width:430px){
        width: 100%;
    }
`

export const CardImage = styled.img`
    width: 100%;
    border-radius: 10px;
    
`
export const CardRight = styled.div`
    width: 60%;
    @media(max-width:430px){
        width: 100%;
    }
`
export const CardRight1 = styled.div`
    width: 60%;
    gap: 10px;
    display: flex;
    @media(max-width:430px){
        width: 100%;
    }
`

export const CardTitle = styled.h1`
    font-size: 17px;
    margin-bottom: 5px;
`
export const CardText = styled.p`
    font-size: 11px;
`
export const CardBlock = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    .maingr{
        width: 35px;
        height: 35px;
    }
    .css-sxh3gq-MuiAvatar-root-MuiAvatarGroup-avatar{
        width: 35px;
        height: 35px;
    }
`
export const Reyting = styled.div`
    position: absolute;
    bottom: 20px;
    right: 4px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    border-radius: 7px;
`
export const CardBottom = styled.div`
    display: flex;
    align-items: center;
    @media(max-width:430px){
        flex-direction: column;
        gap: 20px;
    }
`

export const CardWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 5px;
`

export const CardIcon = styled.img`
    
`
export const CardIconText = styled.p`
    font-size: 10px;
`
export const MoreButton = styled.button`
    width: 140px;
    height: 35px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px 0px #00000026;
    background-color: #65B389;
    color: white;
    border: none;
    cursor: pointer;
`
export const MoreButton2 = styled.button`
    width: 140px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid #65B389;
    color: #65B389;
    box-shadow: 0px 4px 10px 0px #00000026;
    cursor: pointer;
`