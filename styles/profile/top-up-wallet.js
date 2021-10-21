import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Wrapper = styled.div`
    width:  400px;
    margin: auto;
    margin-top: 7%;
    border: ${({ theme }) => `0.2px solid ${theme.secondary}`};
    border-radius: 5px;
    padding: 20px;
`;

export const Form = styled.form``;

export const HolderSection = styled.div``;

export const InputSection = styled.div``;

export const WalletDisplay = styled.div`
    margin: auto;
    height: ${({ size }) => size + 'px' };
    width: ${({ size }) => size + 'px' };
`;
