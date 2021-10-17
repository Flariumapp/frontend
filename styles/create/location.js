import styled from 'styled-components/macro';

export const Container = styled.div`
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
    border: .5px solid #ccc;
    margin-top: 5%;
`;

export const Section = styled.div`
    flex: 1;
    padding: 20px;
`;

export const Display = styled.div`
    height: 300px;
    width: 300px;
    background-color: ${ ({ theme }) => theme.secondary };
    margin: auto;
`;

export const List = styled.div``;

export const FormContainer = styled.div`
    flex: 1;
    padding: 20px;
`;

export const Form = styled.form``;

