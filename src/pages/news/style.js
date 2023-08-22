import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    padding:2rem 0;
`;

export const Wrapper = styled.div`
    width: 100%;
    padding-top: 90px;
    max-width: 1460px;
    min-height: 700px;
    position: relative;
    z-index: 5;

`;

export const BgImg = styled.img`
    position: absolute;
    bottom: 0px;
    width: 0px;
    left: 0px;
    z-index: 1;
`;

export const WrapperInner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: -10px;
    @media(max-width:880px){
        flex-direction: column;
    }
`;

export const Left = styled.div`
    width: 68%;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 13px;
    padding: 20px;
    @media(max-width:880px){
        width: 100%;
        justify-content: space-around;
    }
    
`;
export const Block = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px;
    margin-top: 20px;
    border-bottom:  1px solid #000000;
`
export const Right = styled.div`
        width: 30%;
        background-color: white;
        &:last-child{
            border-bottom:none !important;
        }
        @media(max-width:880px){
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const DateRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const InnerBlock = styled.div`

`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    margin-top: 20px;
    @media(max-width:1100px){
        font-size: 18px;
        line-height: 22px;
    }
`

export const SvgIcon = styled.img`

`

export const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;

`