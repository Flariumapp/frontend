import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${ ({ theme }) => theme.dark };
    background: ${({ img = '/images/backgrounds/plane-over-sea.jpeg' }) => `linear-gradient(#00000033, #00000033), url(${img}), #000`};
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    z-index: 0;
    position: fixed;
    overflow: scroll;
`;