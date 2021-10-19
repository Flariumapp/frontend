import styled from 'styled-components/macro';
import Image from 'next/image';

export const Container = styled.div`
    /* position: relative; */
    border-radius: 5px;
    border: 0.2px solid #ccc;
    overflow: hidden;
    padding: 0 5px;
    text-align: center;
    background: ${ ({ theme }) => theme.light };
    margin: 0 5px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Wrapper = styled.div`
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
    margin-top: 5px;
    font-size: 12px;
`;