import styled from 'styled-components/macro';

export const Container = styled.div``;

// export const Form = styled.form``;

export const Wrapper = styled.div`
    margin: auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    padding: 20px;
`;

export const Section = styled.div`
    flex: 1;
`;

export const InputSection = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Display = styled.div`
    height: ${ ({ size }) => size + 'px' };
    width: ${ ({ size }) => size + 'px' };
    border-radius: 5px;
    border: 0.2px solid #ccc;
    background-color: ${ ({ theme }) => theme.secondary };
    overflow: hidden;
`;

export const InputContainer = styled.div``;