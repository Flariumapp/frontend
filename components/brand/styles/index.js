import styled from 'styled-components';

export const Container = styled.div`
    cursor: pointer;
    margin: 0 20px;
    display: flex;
    align-items: center;
`;

export const BrandLogo = styled.div`
    margin-right: 10px;
`;

export const BrandText = styled.h4`
    margin: 0;
    text-transform: capitalize;
    font-size: ${ ({ size }) => size + 'px' };
    color: ${ ({ dark, theme }) => dark ? theme.dark : theme.light };
`;