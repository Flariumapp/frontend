import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0.2px solid #ccc;
    padding: 5px 10px;
    margin-bottom: 10px;
    border-radius: 5px;
`;

export const Column = styled.div`
    flex: 1;
    justify-content: center;
    text-align: ${ ({ textAlign = 'center' }) => textAlign };
`;