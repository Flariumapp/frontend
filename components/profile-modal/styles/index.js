import styled from 'styled-components/macro';

export const Container = styled.div`
    width: ${({ size }) => size + 'px'};
`;

export const Grid = styled.div`
    display: flexbox;
    flex-wrap: wrap;
    width: 100%;
`;

export const Item = styled.div`
    display: block;
    cursor: pointer;
    height: ${({ size }) => size + 'px'};
    width: ${({ size }) => size + 'px'};
    padding: 1px;
    filter: ${ ({ active }) => active ? 'brightness(50%)' : 'brightness(100%)' };

    /* &:nth-child(5n - 4) {
        padding-left: 0;
    }

    &:nth-child(5n) {
        padding-right: 0;
    } */

    &:hover {
        filter: brightness(50%);
    }
`;