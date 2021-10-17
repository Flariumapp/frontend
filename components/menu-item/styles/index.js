import styled from 'styled-components/macro';
import Image from 'next/image';

export const Container = styled.div`
    cursor: pointer;
    display: inline-block;
    position: relative;
    margin-right: 5px;
`;

export const AddPlate = styled.div`
    position: relative;
    background-color: ${ ({ theme }) => theme.secondary };
    justify-content: center;
    align-items: center;
    width: ${ ({ size }) => size + 'px' };
    height: ${ ({ size }) => size + 'px' };
`;

export const Display = styled.div`
    position: relative;
    height: fit-content;
    width: fit-content;
    /* border: ${ ({ isActive, theme }) => isActive ? `0.2px solid ${theme.primary}` : '0.2px solid #ccc' } ; */
    /* vertical-align: top; */

    :nth-child() {
        position: unset !important;
    }
`;

export const Photo = styled(Image)`
    object-fit: cover;
    &:hover {
        filter: brightness(50%);
    }
`;


export const Dot = styled.div`
    background-color: ${({ theme }) => theme.primary };
    height: 5px;
    width: 5px;
    border-radius: 10px;
    border: none;
    margin: auto;
    margin-top: 4px;
`;