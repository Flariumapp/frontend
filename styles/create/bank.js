import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Wrapper = styled.div`
    width: 300px;
    margin: auto;
    margin-top: 10%;
`;

export const Display = styled.div`
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form``;

export const Info = styled.div``;

export const Fallback = styled.div`
    cursor: pointer;
    position: relative;
    margin: auto;
    justify-content: center;
    align-items: center;
    height: ${ ({ size }) => size + 'px' };
    width: ${ ({ size }) => size + 'px' };
    background-color: ${({ theme }) => theme.secondary};
`;