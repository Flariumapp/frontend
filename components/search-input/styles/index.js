import styled from 'styled-components/macro';
import Image from 'next/image';

export const Container = styled.div`
    position: relative;
`;

export const InputContainer = styled.div`
`;

export const ResultContainer = styled.div`
    width: 100%;
    position: absolute;
    z-index: 300;
    display: block;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const ResultList = styled.div``;

export const ResultItem = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    background-color: ${ ({ isActive, theme }) => isActive ? theme.greyish : theme.light };

    &:hover {
        background-color: ${ ({ theme }) => theme.greyish };
    }
`;

export const ResultImage = styled(Image)`
    border-radius: 5px;
`;

export const ResultText = styled.p`
    color: ${ ({ theme }) => theme.darkish };
    margin: 0;
`;