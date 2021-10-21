import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Wrapper = styled.div`
    width: 400px;
    border: ${ ({ theme }) => `0.2px solid ${theme.secondary}` };
    border-radius: 5px;
    margin: auto;
    margin-top: 10%;
    padding: 20px;
`;

export const Form = styled.form``;

export const WalletContainer = styled.div`
    justify-content: center;
    padding: 10px;
`;

export const WalletDisplay = styled.div`
    margin: auto;
    height: ${({ size }) => size + 'px' };
    width: ${({ size }) => size + 'px' };
`;

export const WalletInfo = styled.div`
    text-align: center;
`;

export const WalletLabel = styled.p`
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.darkish};
`;

export const WalletAmountContainer = styled.div`
    padding: 0px;
    text-align: center;
`;

export const WalletAmount = styled.p`
    margin: 0;
    font-size: 30px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
`;