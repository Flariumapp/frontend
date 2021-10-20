import styled from 'styled-components/macro';
import Image from 'next/image';

export const Container = styled.div`
    /* position: relative; */
    display: flex;
    border-radius: 5px;
    border: 0.2px solid #ccc;
    overflow: hidden;
    background: ${ ({ theme }) => theme.light };
    margin: 0 5px;
`;

export const Wrapper = styled.div`
`;

export const ProductSection = styled.div`
    text-align: center;
    padding: 5px;
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
    border: ${ ({ theme }) => `0.2px solid ${theme.secondary}` };
`;

export const Cut = styled.div`
    /* position: absolute;
    top: 10;
    right: 10;
    padding: 5px; */
`;

export const Photo = styled(Image)`
    border-radius: 10px;
    object-fit: cover;
`;

export const Title = styled.p`
    margin: 0;
    font-size: 12px;
`;

export const Cost = styled.p`
    margin: 0;
    font-size: 12px;
    color: ${ ({ theme }) => theme.primary };
`;

export const QuantitySection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
`;

export const QuantityContainer = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 0.2px solid #cccccc;
    vertical-align: middle;
    height: 30px;
`;

export const Quantity = styled.p`
    font-size: 12px;
    text-align: center;
    line-height: 30px;
`;