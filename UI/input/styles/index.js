import styled from 'styled-components/macro';

export const Container = styled.div``;

export const TextContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    padding: 10px 20px;
    border-radius: 5px;
    width: ${ ({ width }) => width ? width + 'px' : '100%' };
    height: ${ ({ height }) => height ? height + 'px' : '100%' };
`;

export const UnderlinedContainer = styled.div`
    padding: 10px 0px;
    width: ${ ({ width }) => width ? width + 'px' : '100%' };
    height: ${ ({ height }) => height ? height + 'px' : '100%' };
    border-bottom: 1px solid #ccc;
`;

export const TextInput = styled.input`
    border: none;
    background-color: rgba(255, 255, 255, 0);
    margin: 0;
    color: ${ ({ color = '#000' }) => color };
    ::placeholder {
        /* color: ${ ({ theme }) => theme.light }; */
        font-size: 16px;
        margin: 0;
    }

    &:active {
        border: none;
    }

    &:focus {
        border: none;
        outline: none;
    }
`;

export const Label = styled.p`
    font-size: 18px;
    margin: 0;
    color: ${ ({ labelColor = '#000' }) => labelColor };
`;