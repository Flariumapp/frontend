import styled from 'styled-components/macro';

export const Container = styled.div`
    border-radius: 5px;
    border: ${ ({ theme }) => `0.2px solid ${theme.secondary}` };
    overflow: hidden;
    margin-bottom: 10px;

    &:hover {
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
    }
`;

export const Display = styled.div`
    height: ${ ({ size }) => size + 'px' };
    width: ${ ({ size }) => size + 'px' };
`;

export const Info = styled.div`
    padding: 10px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Name = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 400;
`;

export const Price = styled.p`
    margin: 0;
    font-size: 16px;
`;