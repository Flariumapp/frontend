import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Display = styled.div`
    border-radius: 5px;
    border: 0.2px solid ${ ({ theme }) => theme.secondary };
    height: ${ ({ size }) => size + 'px' };
    width: ${ ({ size }) => size + 'px' };
    background-color: ${ ({ theme }) => theme.light };
    overflow: hidden;
    margin-right: 30px;
    margin-bottom: 30px;

    /* &:first-of-type {
        margin-left: 0;
        margin-top: 0;
    } */
`;

export const Title = styled.p`
    margin: 0;
`;