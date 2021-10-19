import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Square = styled.div`
    position: relative;
    height: ${ ({ size }) => size + 'px' };
    width: ${ ({ size }) => size + 'px' };
    border: ${ ({ veg, theme }) => veg ? `0.2px solid ${theme.success}` : `0.2px solid ${theme.danger}` };
`;

export const Circle = styled.div`
    height: ${ ({ size }) => (size / 2) + 'px' };
    width: ${ ({ size }) => (size / 2) + 'px' };
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    background-color: ${ ({ veg, theme }) => veg ? theme.success : theme.danger };;
`;