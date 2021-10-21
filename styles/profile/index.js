import styled from 'styled-components/macro';
import Image from 'next/image';

export const Container = styled.div`
    width: 100%;
`;

export const Wrapper = styled.div`
    margin: auto;
    margin-top: 80px;
    width: 80%;
`;

export const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const IdentitySection = styled.div`
    width: fit-content;
    justify-content: center;
    text-align: center;
`;

export const Name = styled.p`
    font-size: 17px;
    color: ${ ({ theme }) => theme.darkish };
`;

export const InfoSection = styled.div`
    margin: auto;
    padding: 20px;
`;

export const InfoRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const InfoCol = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 40px;
`;

export const InfoLabel = styled.p`
    color: ${ ({ theme }) => theme.darkish };
    white-space: nowrap;
    font-size: 16px;
`;

export const InfoText = styled.p`
    color: ${ ({ theme }) => theme.primary };
    font-size: 17px;
`;

export const OrderList = styled.div`
    width: 100%;
    display: flexbox;
    flex-direction: row;
`;

export const OrderItem = styled.div`
    text-align: center;
    /* justify-content: center; */
    margin: 0 15px;
`;

export const Border = styled.div`
    padding: 3px;
    border-radius: 100%;
    border: ${ ({ theme }) => `3px solid ${theme.primary}` };
`;

export const OrderItemDisplay = styled.div`
    width: ${ ({ size }) => size + 'px' };
    height: ${ ({ size }) => size + 'px' };
    border-radius: 100%;
    overflow: hidden;
    border: ${({ theme }) => `0.2px solid ${theme.secondary}`};
`;

export const OrderItemName = styled.p`
    font-size: 17px;
    color: ${ ({ theme }) => theme.darkish };
`;

export const OptionSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;