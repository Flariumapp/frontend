import styled from 'styled-components/macro';

export const Container = styled.div`
    cursor: pointer;
    position: relative;
    height: 140px;
    width: 110px;
    border-radius: 5px;
    background-color: ${ ({ theme }) => theme.light };
    padding: 20px;
    text-align: center;
    margin: 15px;
`;

export const Display = styled.div`
    border-radius: 100%;
    height: ${({ size }) => size + 'px'};
    width: ${ ({ size }) => size + 'px' };
    margin: auto;
    overflow: hidden;
`;

export const Info = styled.p`
    font-size: 14px;
    color: ${ ({ theme }) => theme.darkish };
`;