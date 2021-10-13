import styled from 'styled-components/macro';

export const Container = styled.div``;

export const ButtonContainer = styled.div``;

export const ButtonView = styled.button`
    cursor: pointer;
    padding: 22px;
    height: ${ (height) => height ? height + 'px' : '100%' };
    width: ${ (width) => width ? width + 'px' : '100%' };
    font-size: 18px;
    border-radius: 3px;
    border: none;
    background: linear-gradient(
        45deg,
        rgb(0, 0, 0, 0.7),
        rgb(0, 0, 0, 1)
    );
    color: ${ ({ theme }) => theme.light };
`;

export const MaterialButtonView = styled.button`
    cursor: pointer;
    padding: 22px;
    height: ${ (height) => height ? height + 'px' : '100%' };
    width: ${ ({ block, width }) => block ? '100%' : (width ? width + 'px' : '100%') };
    font-size: 18px;
    border-radius: 3px;
    border: none;
    background: ${ ({ theme }) => theme.primary} ;
    color: ${ ({ theme }) => theme.light };
`;