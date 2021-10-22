import styled from 'styled-components/macro';

export const Container = styled.div`
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
    border: ${ ({ theme }) => `0.2px solid ${theme.secondary}` };
    margin-bottom: 20px;

    &:hover {
        background-color: ${({ theme }) => theme.milk };
    }
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
`;

export const Column = styled.div`
    flex: 1;
    height: 100%;
    text-align: center;
`;

export const Amount = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: ${ ({ theme }) => theme.darkish };
    margin: 0;
`;

export const Mode = styled.p`
    font-size: 14px;
    color: ${({ theme, withdraw }) => withdraw ? theme.danger : theme.success};
    margin: 0;
`;

export const Time = styled.p`
    font-size: 14px;
    color: ${ ({ theme }) => theme.primary };
    margin: 0;
`;