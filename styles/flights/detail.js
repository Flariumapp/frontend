import styled from 'styled-components/macro';

export const Container = styled.div`
    padding: 20px;
`;

export const Wrapper = styled.div`
    margin: auto;
    width: fit-content;
    border: ${({ theme }) => `0.2px solid ${theme.secondary}`};
    padding: 30px;
    border-radius: 5px;
`;

export const LocationSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: auto;
    cursor: pointer;
`;

export const LocationName = styled.p`
    cursor: pointer;
    font-size: 14px;
    color: ${({ theme }) => theme.primary};
`;

export const Display = styled.div`
    width: ${({ size }) => size + 'px'};
    height: ${({ size }) => size + 'px'};
    border-radius: 5px;
    border: ${({ theme }) => `0.2px solid ${theme.secondary}`};
    overflow: hidden;
`;

export const Row = styled.div`
    /* height: 50px; */
    margin: auto;
    width: 450px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Column = styled.div`
    flex: 1;
    padding: 0px 10px;
`;

export const Label = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.darkish};
`;

export const Value = styled.p`
    text-transform: capitalize;
    font-size: 14px;
    color: ${({ theme }) => theme.primary};
`;

export const Logo = styled.div`
    height: ${({ size }) => size + 'px'};
    width: ${({ size }) => size + 'px'};
    /* border-radius: 5px; */
    overflow: hidden;
    /* border: ${({ theme }) => `0.2px solid ${theme.secondary}`}; */
`;