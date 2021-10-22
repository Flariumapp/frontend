import styled from 'styled-components/macro';
import Image from 'next/image';

export const Container = styled.div`
    position: relative;
    /* background-color: ${ ({ theme, glass }) => glass ? 'rgba(255, 255, 255, 0.5)' : theme.light }; */
`;

export const InputContainer = styled.div`
`;

export const ResultContainer = styled.div`
    width: 100%;
    position: absolute;
    z-index: 300;
    display: block;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    background-color: ${ ({ theme, glass }) => glass ? 'rgba(255, 255, 255, 0.5)' : `${theme.light}` };
    backdrop-filter: ${ ({ glass }) => glass ? blur(10) : blur(0) };
`;

export const ResultList = styled.div``;

export const ResultItem = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    background-color: ${ ({ isActive, theme, glass }) => isActive ? (glass ? theme.primary : theme.greyish) : (glass ? 'rgba(255, 255, 255, 0.5)' : theme.light) };
    backdrop-filter: ${ ({ glass }) => glass ? 'blur(10px)' : 'blur(0px)' };

    &:hover {
        background-color: ${ ({ theme, glass }) => glass ? theme.primary : theme.greyish };
    }
`;

export const ResultImage = styled(Image)`
    border-radius: 5px;
    border: ${ ({ theme, glass }) => !glass ? 'none' : `0.5px solid ${theme.light}` };
`;

export const ResultText = styled.p`
    color: ${ ({ theme, glass, isActive }) => isActive ? theme.light : theme.darkish };
    margin: 0;
`;