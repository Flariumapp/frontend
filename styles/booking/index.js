import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Wrapper = styled.div`
    height: 400px;
    display: flex;
    flex-direction: row;
    width: 60%;
    margin: auto;
    margin-top: 10%;
    border-radius: 5px;
    border: ${({ theme }) => `0.2px solid ${theme.secondary}`};
`;

export const Section = styled.div`
    flex: 1;
`;

export const PassengerSection = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.milk };
    border-right: ${({ theme }) => `0.2px solid ${theme.secondary}`};
    display: flexbox;
    flex-wrap: wrap;
    overflow: auto;
`;

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
`;

export const Form = styled.form`
    height: 100%;
`;