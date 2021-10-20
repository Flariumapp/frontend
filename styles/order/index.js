import styled from 'styled-components/macro';

export const Container = styled.div`

`;

export const Wrapper = styled.div`
    width: 60%;
    height: 500px;
    border: ${ ({ theme }) => `0.1px solid ${theme.secondary}` };
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-top: 50px;
    overflow: hidden;
`;

export const Section = styled.div`
    flex: 1;
`;

export const InfoSection = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
