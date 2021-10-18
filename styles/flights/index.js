import styled from 'styled-components/macro';
import Image from 'next/image';

export const Container = styled.div`
    width: 100%;
`;

export const LoadingContainer = styled.div`
    position: relative;
    height: 90vh;
    width: 100%;
`;

export const LoaderSection = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const EntrySection = styled.div`
    height: 100px;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-align: center;
`;

export const Form = styled.form`
    width: 100%;
`;

export const InputSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const InputContainer = styled.div`
    flex: 1;
`;

export const ButtonContainer = styled.div`
    display: inline-block;
    margin: 0px 10px;

    &:last-of-type {
        margin-right: 0;
    }
`;

export const FlightsTable = styled.div`
    width: 80%; 
    margin: auto;
    min-height: 42vh;
    justify-content: center;
`;

export const Display = styled.div`
    height: ${ ({ size }) => size + 'px' };
    width: ${ ({ size }) => size + 'px' };
    border-radius: 5px;
    overflow: hidden;
    border: 0.2px solid #ccc;
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

export const FieldContainer = styled.div`
    /* display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center; */
`;

export const FieldText = styled.p`
    margin: 0;
`;