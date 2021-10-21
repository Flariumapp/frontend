import styled from 'styled-components/macro';

export const Container = styled.div``;

export const HolderContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: ${({ theme }) => `0.2px solid ${theme.secondary}`};
    border-radius: 10px;
    background-color: ${ ({ theme }) => theme.milk };
    align-items: center;
    padding: 10px;
`;

export const HolderDisplay = styled.div`
    height: ${({ size }) => size + 'px'};
    width: ${({ size }) => size + 'px'};
    border: ${({ theme }) => `0.2px solid ${theme.secondary}` };
    border-radius: 100%;
    overflow: hidden;
`;

export const HolderInfo = styled.div`
    flex: 1;
    padding: 10px;
`;

export const HolderName = styled.p`
    font-size: 14px;
    color: ${ ({ theme }) => theme.darkish };
    margin: 0;
`;

export const HolderEmail = styled.p`
    font-size: 12px;
    color: ${ ({ theme }) => theme.primary };
    margin: 0;
`;
