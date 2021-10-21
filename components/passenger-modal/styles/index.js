import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const Section = styled.div`
    flex: 1;
`;

export const Display = styled.div`
    border: 0.2px solid #ccc;
    border-radius: 5px;
    background-color: #eee;
    height: 200px;
    width: 200px;
    overflow: hidden;
`;

export const Photo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;


export const Form = styled.div`
    height: 100%;
`;

export const UploadText = styled.p`
    cursor: pointer;
    color: #1894FF;
    font-size: 15px;
    margin: 0;
    margin-left: 5px;
`;

export const Footer = styled.div`
    /* padding: 20px; */
    display: flex;
    flex-direction: row;
`;

export const InputSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const InputContainer = styled.div`
    flex: 1;
`;