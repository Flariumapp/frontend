import styled from 'styled-components/macro';

export const Container = styled.div`
    cursor: pointer;
    width: ${ ({ size }) => size + 'px' };
    height: ${ ({ size }) => size + 'px' };
    border-radius: 100%;
    border: ${ ({ bordered, theme }) => bordered ? `0.2px solid ${theme.secondary}` : 'none' };
    background-color: ${ ({ theme }) => theme.secondary };
    overflow: hidden;
    margin: 0;
    /* box-shadow: 0 3px 5px #444; */
    &:hover {
        filter: ${ ({ overlay }) => overlay ? 'brightness(50%)' : 'brightness(100%)' };
    }
`;