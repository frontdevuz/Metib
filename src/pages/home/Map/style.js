import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 100px;
`;

export const Wrapper = styled.div`
    max-width: 1460px;
    width: 100%;
    padding:0 20px;
`;

export const Mapping = styled.iframe`
    width: 100%;
    height: 600px;
    border-radius: 10px;
    border: none;
    overflow: hidden;
`;

export const Title = styled.h1`
    color: #333;
    margin-bottom: 20px;
    font-weight: 600;
    position: relative;
`;

export const Image = styled.img`
    width: 100px;
    position: absolute;
    left: -110px;
`;
