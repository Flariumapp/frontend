import styled from 'styled-components/macro';

export const Container = styled.div`
    border-radius: 5px;
    border: ${ ({ theme }) => `0.2px solid ${theme.secondary}` };
    background-color: ${ ({ theme }) => theme.milk };
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Column = styled.div`
    flex: 1;
    height: 100%;
    padding: 10px;
    justify-content: center;
    text-align: center;
`;

export const LocationContainer = styled.div`
    width: ${ ({ size }) => size + 'px' };
    height: ${ ({ size }) => size + 'px' };
    border-radius: 5px;
    border: ${ ({ theme }) => `0.2px solid ${theme.secondary}` };
    overflow: hidden;
    margin: auto;
`;