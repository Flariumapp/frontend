import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
`;

export const LoadingContainer = styled.div`
    height: 500px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Loader = styled.div`
    margin: auto;
    margin-top: 200px;
`;

export const EntrySection = styled.div`
    height: 100px;
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-align: center;
`;

export const Form = styled.form``;

export const InputContainer = styled.div`
    display: inline-block;
    margin: 0px 10px;

    &:first-of-type {
        margin-left: 0;
    }
`;

export const ButtonContainer = styled.div`
    display: inline-block;
    margin: 0px 10px;

    &:last-of-type {
        margin-right: 0;
    }
`;

export const FlightsTable = styled.div`
    width: 70%;
    margin: auto;
    min-height: 42vh;
    justify-content: center;
`;

export const Display = styled.div`
    height: 60px;
    width: 100px;
    overflow: hidden;
`;

export const Logo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`;

export const Status = styled.p`
    text-transform: capitalize;
    margin: 0;
    color: ${ ({ color }) => color };
`;