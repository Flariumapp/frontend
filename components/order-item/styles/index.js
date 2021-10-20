import styled from 'styled-components/macro';
import Image from 'next/image';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    /* border: 0.2px solid #ccc; */
    overflow: hidden;
    padding: 10px;
    text-align: center;
    background: ${ ({ theme }) => theme.light };
    margin: 0 5px;
    justify-content: space-between;
    align-items: center;

    &:hover {
        box-shadow: 0 2px 5px #ccc;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Display = styled.div`
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    height: ${ ({ size }) => size + 'px' };
    width: ${ ({ size }) => size + 'px' };
    /* border: ${ ({ theme }) => `0.2px solid ${theme.secondary}` }; */
`;

export const Photo = styled(Image)``;

export const TitleContainer = styled.div`
    align-items: center;
`;

export const Title = styled.p`
    margin: 0;
    font-size: 14px;
`;

export const QuantityContainer = styled.div`
    align-items: center;
`;

export const Quantity = styled.p`
    margin: 0;
    font-size: 14px;
`;

export const CostContainer = styled.div`
    align-items: center;
`;

export const Cost = styled.p`
    margin: 0;
    font-size: 14px;
    color: ${ ({ theme }) => theme.primary };
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;